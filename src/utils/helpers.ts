/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveToChromeStorage = async (
  key: string,
  value: any
): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};
