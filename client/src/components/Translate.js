import React, { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div id="google_translate_element" style={{ marginLeft: '10px' }}></div>
  );
};

export default Translate;
