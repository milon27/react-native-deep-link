import {useEffect, useState} from 'react';
import {Linking} from 'react-native';

export const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    // when app is closed
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      setUrl('getUrlAsync=> ' + initialUrl);
      setProcessing(false);
    };

    getUrlAsync();
    // when app is open

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      setUrl('addEventListener=> ' + url);
      setProcessing(false);
    });

    return () => {
      // Clean up the event listeners
      linkingSubscription.remove();
    };
  }, []);

  return {url, processing};
};
