import React from 'react'
import { Sun, Moon} from "lucide-react";
import useTheme from '../contexts/theme';
import { motion, AnimatePresence } from "framer-motion"

const ThemeBtn = () => {
    const {themeMode, lightTheme, darkTheme}= useTheme()
    const onClickThemeButton=(e)=>{
     themeMode==='light'?darkTheme():lightTheme() 
    }
  return (
    <div onClick={onClickThemeButton}>
      <AnimatePresence>
        {themeMode==='light'?
      <AnimatePresence>  
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.5}}
      exit={{ opacity: 0 }}
      >
        <Sun/>
      </motion.div>
      </AnimatePresence>
      :<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.5}}
      exit={{ opacity: 0 }}
      >
        <Moon/>
      </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default ThemeBtn