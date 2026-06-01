(function() {
  

  // Icon name mapping (HTML Tag names -> Lucide icon names)
  function getIconNameForTag(tagName) {
    const normalizedTag = tagName.toLowerCase();

    switch (normalizedTag) {
      // Headings + basic text elements
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
      case 'span':
      case 'strong':
      case 'em':
      case 'b':
      case 'i':
        return 'type';

      // Links
      case 'a':
        return 'link';

      // Images
      case 'img':
      case 'picture':
        return 'image';

      // Lists
      case 'ul':
      case 'ol':
      case 'li':
      case 'dl':
      case 'dt':
      case 'dd':
        return 'list';

      // Forms
      case 'form':
      case 'input':
      case 'textarea':
      case 'select':
      case 'option':
      case 'label':
        return 'input';

      // Tables
      case 'table':
      case 'thead':
      case 'tbody':
      case 'tfoot':
      case 'tr':
      case 'th':
      case 'td':
        return 'table';

      // Code
      case 'code':
      case 'pre':
        return 'code';

      // Media
      case 'video':
      case 'audio':
        return 'video';
      default:
        return 'square-dashed';
    }
  }

  const allowedOrigins = ['http://localhost:3000', 'https://dev.caffeine.ai', 'https://caffeine.ai'];
  let parentOrigin = null;

  const EditorStates = {
    Initializing: { type: 'initializing' },
    Ready: { type: 'ready' },
    ElementSelection: { type: 'element-selection', selectedElements: null }
  };

  function ensurePositionedForBadge(el) {
    const style = window.getComputedStyle(el);
    if (style.position === 'static') {
      el.classList.add('editor-selected-badged');
    }
  }

  // Load Lucide from CDN
  function loadLucide() {
    return new Promise((resolve, reject) => {
      if (window.lucide) {
        resolve(window.lucide);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/lucide@0.562.0/dist/umd/lucide.min.js';
      script.integrity = 'sha256-U0gT0dovTUVQOD1dsIea7bL3TC0LiVGt4nfovK6m31I=';
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if (window.lucide) {
          resolve(window.lucide);
        } else {
          reject(new Error('Lucide failed to load'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load Lucide script'));
      document.head.appendChild(script);
    });
  }

  // Cache for Lucide instance
  let lucideInstance = null;
  let lucideLoadPromise = null;

  // Badge position update system
  let badgeUpdateRafId = null;
  const badgeToElementMap = new WeakMap();

  function updateBadgePosition(badge, el) {
    const rect = el.getBoundingClientRect();

    // Use viewport coordinates for fixed positioning
    badge.style.position = 'fixed';
    badge.style.top = `${rect.top}px`;
    badge.style.right = `${window.innerWidth - rect.right}px`;
    badge.style.transform = 'translateY(0)'; // Ensure no transform interference
  }

  function updateAllBadgePositions() {
    const badges = document.querySelectorAll('[data-editor-badge="1"]');
    badges.forEach((badge) => {
      const el = badgeToElementMap.get(badge);
      if (el?.isConnected) {
        updateBadgePosition(badge, el);
      } else {
        // Element was removed, clean up badge
        badge.remove();
      }
    });
  }

  function scheduleBadgeUpdate() {
    if (badgeUpdateRafId) {
      cancelAnimationFrame(badgeUpdateRafId);
    }
    badgeUpdateRafId = requestAnimationFrame(updateAllBadgePositions);
  }

  // Set up scroll/resize listeners (only once)
  let badgeListenersAttached = false;
  function attachBadgeUpdateListeners() {
    if (badgeListenersAttached) return;
    badgeListenersAttached = true;

    window.addEventListener('scroll', scheduleBadgeUpdate, { passive: true });
    window.addEventListener('resize', scheduleBadgeUpdate, { passive: true });
  }

  async function addBadge(el, id) {
    ensurePositionedForBadge(el);
    const badge = document.createElement('span');
    badge.className = 'editor-badge';
    badge.setAttribute('data-editor-badge', '1');
    badge.setAttribute('data-badge-element-id', id);

    // Store mapping for position updates
    badgeToElementMap.set(badge, el);

    const tagName = el.tagName.toLowerCase();
    const iconName = getIconNameForTag(tagName);

    const iconContainer = document.createElement('span');
    iconContainer.style.display = 'inline-flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.marginRight = '4px';
    iconContainer.style.verticalAlign = 'middle';

    // Load Lucide if not already loaded
    if (!lucideLoadPromise) {
      lucideLoadPromise = loadLucide();
    }

    try {
      lucideInstance = await lucideLoadPromise;

      // Create icon element
      const iconElement = document.createElement('i');
      iconElement.setAttribute('data-lucide', iconName);
      iconElement.style.width = '12px';
      iconElement.style.height = '12px';
      iconElement.style.display = 'inline-block';
      iconElement.style.color = 'currentColor';

      iconContainer.appendChild(iconElement);

      // Initialize the icon after adding to DOM
      setTimeout(() => {
        if (lucideInstance?.createIcons) {
          lucideInstance.createIcons();
        }
      }, 0);
    } catch (error) {
      console.warn('Failed to load icon:', error);
      // Fallback: create a simple placeholder
      const placeholder = document.createElement('span');
      placeholder.textContent = '•';
      placeholder.style.fontSize = '12px';
      iconContainer.appendChild(placeholder);
    }

    const tagSpan = document.createElement('span');
    tagSpan.className = 'editor-badge-tag';
    tagSpan.textContent = tagName;

    const idSpan = document.createElement('span');
    idSpan.className = 'editor-badge-id';
    idSpan.textContent = id;

    // Create close button with X icon
    const closeButton = document.createElement('button');
    closeButton.className = 'editor-badge-close';
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const editor = window.getEditorInstance();
      editor.removeSelection(id);
    });

    try {
      const closeIconElement = document.createElement('i');
      closeIconElement.setAttribute('data-lucide', 'x');
      closeButton.appendChild(closeIconElement);

      // Initialize the close icon after adding to DOM
      setTimeout(() => {
        if (lucideInstance?.createIcons) {
          lucideInstance.createIcons();
        }
      }, 0);
    } catch (error) {
      console.warn('Failed to load close icon:', error);
      // Fallback: create a simple X text
      closeButton.textContent = '×';
      closeButton.style.fontSize = '14px';
      closeButton.style.lineHeight = '1';
    }

    badge.appendChild(iconContainer);
    badge.appendChild(tagSpan);
    badge.appendChild(idSpan);
    badge.appendChild(closeButton);

    // Append to body to avoid overflow clipping
    document.body.appendChild(badge);

    // Position the badge and attach update listeners
    updateBadgePosition(badge, el);
    attachBadgeUpdateListeners();

    // Also update on next frame to ensure accurate positioning
    requestAnimationFrame(() => updateBadgePosition(badge, el));
  }

  function removeBadge(el) {
    // Find badge by element reference
    const badges = document.querySelectorAll('[data-editor-badge="1"]');
    badges.forEach((badge) => {
      if (badgeToElementMap.get(badge) === el) {
        badgeToElementMap.delete(badge);
        badge.remove();
      }
    });
    el.classList.remove('editor-selected-badged');
  }

  function clearBadges() {
    const badges = document.querySelectorAll('[data-editor-badge="1"]');
    badges.forEach((badge) => {
      const el = badgeToElementMap.get(badge);
      if (el) {
        el.classList.remove('editor-selected-badged');
      }
      badgeToElementMap.delete(badge);
      badge.remove();
    });
    // Also clean up any remaining class references
    document.querySelectorAll('.editor-selected-badged').forEach((el) => {
      el.classList.remove('editor-selected-badged');
    });
  }

  /**
   * Coordinates editor tooling inside the generated app and
   * synchronizes state with the parent frame via postMessage.
   */
  function EditCommunicator() {
    function toParent(message) {
      if (!parentOrigin) {
        return;
      }
      if (window.parent) {
        window.parent.postMessage(message, parentOrigin);
      }
    }

    this.editorState = { type: 'initializing' };
    this.selectedElements = new Map();

    this.injectEditorStyles = function() {
      const style = document.createElement('style');
      style.textContent = `
        .editor-selected {
          outline: 2px solid #4D99F0 !important;
          outline-offset: 2px !important;
          opacity: 1 !important;
          visibility: visible !important;
          transition: none !important;
          transition-property: none !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          clip-path: none !important;
          clip: unset !important;
        }

        .editor-hover {
          outline: 1px dashed #4D99F0 !important;
          outline-offset: 2px !important;
        }

        .editor-selected-badged {
          position: relative !important;
        }

        .editor-badge {
          position: fixed !important;
          background: #4D99F0 !important;
          color: #fff !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
          font-size: 11px !important;
          line-height: 1 !important;
          padding: 4px 6px !important;
          border-radius: 10px !important;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2) !important;
          z-index: 2147483647 !important;
          pointer-events: none !important;
          user-select: none !important;
          display: inline-flex !important;
          align-items: center !important;
        }

        .editor-badge-id {
          font-weight: normal !important;
          font-style: normal !important;
          text-decoration: none !important;
          text-transform: none !important;
          letter-spacing: normal !important;
          transform: translateY(0.5px);
          opacity: 0.6;
          margin-left: 4px;
        }

        .editor-badge-tag {
          font-weight: normal !important;
          font-style: normal !important;
          text-decoration: none !important;
          text-transform: none !important;
          letter-spacing: normal !important;
          transform: translateY(0.5px);
        }

        .editor-badge-close {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin-left: 6px !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          pointer-events: auto !important;
          opacity: 0.8 !important;
          width: 16px;
          height: 16px;
        }

        .editor-badge-close:hover {
          opacity: 1 !important;
        }

        .editor-badge-close i {
          width: 12px !important;
          height: 12px !important;
          display: inline-block !important;
          color: currentColor !important;
        }

        .editor-element-selection-mode {
          cursor: pointer !important;
        }
        .editor-element-selection-mode * {
          cursor: pointer !important;
        }
      `;
      document.head.appendChild(style);
    };

    this.clearAllSelections = function() {
      const allElements = document.querySelectorAll('.editor-selected');
      allElements.forEach((element) => {
        element.classList.remove('editor-selected');
      });
      this.selectedElements.clear();
      clearBadges();
    };

    this.removeSelection = function(id) {
      const entry = this.selectedElements.get(id);
      if (entry) {
        entry.element.classList.remove('editor-selected');
        removeBadge(entry.element);
        this.selectedElements.delete(id);
        this.notifySelectionChange(id, entry.xpath);
      }
    };

    this.addSelection = function(id, target, xpath) {
      requestAnimationFrame(() => {
        target.classList.add('editor-selected');
        addBadge(target, id);
        this.selectedElements.set(id, { id: id, element: target, xpath: xpath });
        this.notifySelectionChange(id, xpath);
      });
    };

    this.toggleCursorStyle = function(enabled) {
      if (enabled) {
        document.body.classList.add('editor-element-selection-mode');
      } else {
        document.body.classList.remove('editor-element-selection-mode');
      }
    };

    /**
     * Generates an XPath expression for a given DOM element.
     * Uses position-based path for better reliability.
     */
    this.generateXPath = function(element) {
      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return null;
      }

      const path = [];
      let current = element;

      while (current && current.nodeType === Node.ELEMENT_NODE) {
        let index = 1;
        let sibling = current.previousElementSibling;

        // Count preceding siblings of the same tag name
        while (sibling) {
          if (sibling.nodeName === current.nodeName) {
            index++;
          }
          sibling = sibling.previousElementSibling;
        }

        const tagName = current.nodeName.toLowerCase();
        const xpathIndex = `[${index}]`;
        path.unshift(tagName + xpathIndex);
        current = current.parentElement;
      }

      return `/${path.join('/')}`;
    };

    /**
     * Finds an element using an XPath expression.
     * Returns null if the element is not found.
     */
    this.findElementByXPath = function(xpath) {
      if (!xpath) return null;

      try {
        // Use document.evaluate for XPath evaluation
        const result = document.evaluate(
          xpath,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        return result.singleNodeValue;
      } catch (error) {
        console.warn('XPath evaluation failed:', xpath, error);
        return null;
      }
    };

    /**
     * Generates a unique ID from an XPath
     */
    function hashXPath(xpath) {
      if (!xpath) return null;
      let hash = 5381;
      for (let i = 0; i < xpath.length; i++) {
        hash = ((hash << 5) + hash) ^ xpath.charCodeAt(i);
      }
      return (hash >>> 0).toString(36).padStart(6, '0');
    }

    this.removeArtificialElements = function(element) {
      // Find badges by element reference (badges are now in body, not in element)
      const badges = document.querySelectorAll('[data-editor-badge="1"]');
      badges.forEach((badge) => {
        if (badgeToElementMap.get(badge) === element) {
          badgeToElementMap.delete(badge);
          badge.remove();
        }
      });

      element.classList.remove('editor-selected', 'editor-selected-badged', 'editor-hover');

      const children = element.children;
      for (let i = 0; i < children.length; i++) {
        this.removeArtificialElements(children[i]);
      }
    };

    this.handleClickElementSelection = function(e) {
      const target = e.target;

      const xpath = this.generateXPath(target);
      const id = hashXPath(xpath);

      if (this.selectedElements.has(id)) {
        this.removeSelection(id);
      } else {
        this.addSelection(id, target, xpath);
      }
    };

    this.notifySelectionChange = function(elementId, elementXPath) {
      const selectedElements = Array.from(this.selectedElements.values()).map(function(entry) {
        return {
          id: entry.id,
          tagName: entry.element.tagName.toLowerCase(),
          xpath: entry.xpath
        };
      });
      const selectedElementIds = Array.from(this.selectedElements.keys());

      toParent({
        type: 'draft-editor:element-selection',
        payload: {
          selectedElements: selectedElements,
          selectedElementIds: selectedElementIds,
          elementId: elementId,
          elementXPath: elementXPath
        }
      });
    };

    this.setupElementClickListeners = function() {
      const selfRef = this;
      document.addEventListener(
        'click',
        function(e) {
          if (selfRef.editorState.type === 'element-selection') {
            // Return early if clicking on a badge or its children
            let current = e.target;
            while (current && current !== document.body) {
              if (current.hasAttribute?.('data-editor-badge')) {
                return;
              }
              current = current.parentElement;
            }
            e.stopImmediatePropagation();
            e.preventDefault();
            selfRef.handleClickElementSelection(e);
          }
        },
        { capture: true }
      );
    };

    this.setupElementHoverListeners = function() {
      this.removeElementHoverListeners();
      const target = document.body || document;
      target.addEventListener('mouseover', this.boundMouseOverListener);
      target.addEventListener('mouseout', this.boundMouseOutListener);
    };

    this.removeElementHoverListeners = function() {
      const target = document.body || document;
      target.removeEventListener('mouseover', this.boundMouseOverListener);
      target.removeEventListener('mouseout', this.boundMouseOutListener);
    };

    this.handleMouseOver = function(e) {
      if (this.editorState.type !== 'element-selection') return;
      e.stopPropagation();
      e.stopImmediatePropagation();
      const target = e.target;

      // Return early if hovering over a badge or its children
      let current = target;
      while (current && current !== document.body) {
        if (current.classList && (
          current.classList.contains('editor-badge') ||
          current.classList.contains('editor-badge-tag') ||
          current.classList.contains('editor-badge-id') ||
          current.classList.contains('editor-badge-close')
        )) {
          return;
        }
        current = current.parentElement;
      }

      const allElements = document.querySelectorAll('.editor-hover');
      allElements.forEach((element) => {
        element.classList.remove('editor-hover');
      });

      target.classList.add('editor-hover');
    };

    this.handleMouseOut = function(e) {
      if (this.editorState.type !== 'element-selection') return;
      const target = e.target;
      target.classList.remove('editor-hover');
    };

    this.rebuildSelection = function(ids) {
      this.clearAllSelections();

      if (!Array.isArray(ids) || ids.length === 0) return [];

      const wanted = new Set(ids);
      const matched = [];

      const elements = document.querySelectorAll('*');
      const selfRef = this;
      elements.forEach(function(el) {
        const xpath = selfRef.generateXPath(el);
        const id = hashXPath(xpath);
        if (wanted.has(id)) {
          selfRef.addSelection(id, el, xpath);
          matched.push(id);
        }
      });

      requestAnimationFrame(() => {
        const selectedElements = Array.from(this.selectedElements.values()).map(function(entry) {
          return {
            id: entry.id,
            xpath: entry.xpath
          };
        });
        const selectedElementIds = Array.from(this.selectedElements.keys());

        if (selectedElementIds.length > 0) {
          this.editorState = EditorStates.ElementSelection;
          this.toggleCursorStyle(true);
          toParent({ type: 'draft-editor:status', payload: { status: this.editorState.type } });
        }

        toParent({
          type: 'draft-editor:selection-rebuilt',
          payload: {
            selectedElements: selectedElements,
            selectedElementIds: selectedElementIds
          }
        });
      });

      return matched;
    };

    // Constructor logic
    this.injectEditorStyles();
    this.toggleCursorStyle(false);

    const selfRef = this;
    window.addEventListener('message', function(event) {
      if (!allowedOrigins.includes(event.origin)) {
        console.error('draft-editor:error disallowed origin:', event.origin);
        return;
      }
      parentOrigin = event.origin;
      const data = event.data || {};
      const type = data.type;
      const payload = data.payload;

      toParent({ type: 'draft-editor:ack', payload: { message: event.data } });

      switch (type) {
        case 'draft-editor:ready':
          selfRef.clearAllSelections();
          selfRef.editorState = EditorStates.Ready;
          selfRef.toggleCursorStyle(false);
          toParent({ type: 'draft-editor:status', payload: { status: selfRef.editorState.type } });
          break;
        case 'draft-editor:tool-element-selection':
          selfRef.clearAllSelections();
          selfRef.editorState = EditorStates.ElementSelection;
          selfRef.toggleCursorStyle(true);
          toParent({ type: 'draft-editor:status', payload: { status: selfRef.editorState.type } });
          break;
        case 'draft-editor:clear-selection':
          toParent({ type: 'draft-editor:status', payload: { status: 'clearing selections' } });
          selfRef.clearAllSelections();
          break;
        case 'draft-editor:remove-selection':
          if (payload?.element) {
            toParent({ type: 'draft-editor:status', payload: { status: `removing ${payload.element}` } });
            selfRef.removeSelection(payload.element);
          }
          break;
        case 'draft-editor:rebuild-selection': {
          const ids = Array.isArray(payload?.ids) ? payload.ids : [];
          selfRef.rebuildSelection(ids);
          break;
        }
      }
    });


    this.boundMouseOverListener = this.handleMouseOver.bind(this);
    this.boundMouseOutListener = this.handleMouseOut.bind(this);

    this.setupElementClickListeners();
    this.setupElementHoverListeners();
    this.editorState = EditorStates.Ready;
    window.parent.postMessage({ type: 'draft-editor:status', payload: { status: 'ready' } }, '*');
  }

  // Initialize editor when DOM is ready
  let editorInstance = null;

  function initEditor() {
    if (!editorInstance) {
      editorInstance = new EditCommunicator();
    }
    return editorInstance;
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditor);
  } else {
    initEditor();
  }

  // Expose globally if needed
  window.EditCommunicator = EditCommunicator;
  window.initEditor = initEditor;
  window.getEditorInstance = function() {
    return editorInstance;
  };

  console.log("Editor script loaded");
})();
