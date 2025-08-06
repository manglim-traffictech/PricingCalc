import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '../utils/storage';
import { defaultHighRange, defaultLowRange } from '../utils/markup';

const MarkupContext = createContext();

export function MarkupProvider({ children }) {
  const [highRange, setHighRange] = useState(defaultHighRange);
  const [lowRange, setLowRange] = useState(defaultLowRange);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem('markupTables');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.highRange) setHighRange(parsed.highRange);
          if (parsed.lowRange) setLowRange(parsed.lowRange);
        }
      } catch (e) {
        // ignore
      }
    };
    load();
  }, []);

  const resetTables = async () => {
    setHighRange(defaultHighRange);
    setLowRange(defaultLowRange);
    try {
      await AsyncStorage.removeItem('markupTables');
    } catch (e) {
      // ignore
    }
  };

  const saveTables = async () => {
    try {
      await AsyncStorage.setItem('markupTables', JSON.stringify({ highRange, lowRange }));
    } catch (e) {
      // ignore
    }
  };

  return (
    <MarkupContext.Provider value={{ highRange, lowRange, setHighRange, setLowRange, resetTables, saveTables }}>
      {children}
    </MarkupContext.Provider>
  );
}

export default MarkupContext;
