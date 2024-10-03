import style from "./b2b.module.scss";
import { listItemTexts, paragraphs } from "./b2bTexts";
import { motion } from "framer-motion";
import { animateFromLeft, animateFromRight } from "../../animation";
import { useTranslation } from "react-i18next";

export default function B2B({ refName }) {
  const { t } = useTranslation();

  return (
    <section className={style.b2b} ref={refName}>
      <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.text}>
            <motion.h2
            {...animateFromLeft()}
            className={style.title}>
            {t('b2b.title')}
          </motion.h2>
              {paragraphs.map((text, index) => (
                <motion.p
                  {...animateFromLeft(index)}
                  className={style.paragraph}
                  key={index}>
                  {t(`b2b.description.${text}`)}
                </motion.p>
              ))}
               <ul className={style.list}>
                {listItemTexts.map((text, index) => (
                <motion.li
                  {...animateFromLeft(index)}
                  className={style.listItem}
                  key={index}>
                  {t(`b2b.listItems.${text}`)}
                </motion.li>))}
               </ul>

            </div>
            <motion.div {...animateFromRight()} className={style.photo}>
                <img src="./images/ourServices.png" alt="our dervices" />
            </motion.div>
        </div>
      </div>
    </section>
  )
}