function reloadScripts(){
    setupSlider();
    setupResizable();
    setupDraggable();
    handlePlaceholders();
    setupTooltip();
    refreshImageListeners();
}

function loadScripts(themeId) {
  const filePaths = [
    'js/globals.js',
    'data/fields.js',
    'data/settingsObj.js',
    'js/helpers/localstorage.js',
    'js/themes/$/data.js',
    'js/themes/$/colors.js',
    'js/themes/$/css.js',
    'js/themes/$/content.js',
    'js/themes/$/structure.js',
    'js/themes/app.js',
    'js/api/unsplash.js',
    'js/widget/resultFilters.js',
    'js/widget/textToMedia.js',
    'js/widget/textToFields.js',
    'js/menus/context-menu.js',
    'js/widget/widget.js',
    'js/widget/tools.js',
    'js/widget/controls.js',
    'js/widget/autogrow.js',
    'js/widget/listeners.js',
    'js/page/hoverAndDivide.js',
    'js/page/interact.js',
    'js/page/parser.js',
    'js/page/draggable.js',
    'js/page/resize.js',
    'js/page/placeholders.js',
    'js/components/slider.js',
    'js/components/daterangepicker.js'
  ];

  const attachScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = resolve;
      script.onerror = reject;

      document.head.appendChild(script);
    });
  };

  const loadScript = (filePath, themeId) => {
    const scriptName = filePath.split('/').pop().split('.').shift();
    const scriptId = 'script-' + scriptName;
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = filePath.replace('$', themeId);
      script.id = scriptId;

      return attachScript(script.src);
    } else {
      return Promise.resolve();
    }
  };

  const loadScriptsSequentially = async () => {
    for (const filePath of filePaths) {
      await loadScript(filePath, themeId);
    }
  };

  return loadScriptsSequentially();
}

const themeId = 1;

loadScripts(themeId)
  .then(() => {
    //page
    setupDraggable();
    handlePlaceholders();
    setupViewChange();
    addHoverAndDivide(".col");
    setupTooltip();
    refreshImageListeners();
    setupResizable();
    setupSlider();
    setupToolbar();
    setupAutoComplete();
    makePanelDraggable('.controls');
  })
  .catch((err) => {
    console.error(err);
  });