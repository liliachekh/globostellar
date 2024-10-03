import { animateFromLeft, animateFromRight } from "../../animation";
import style from "./aboutUs.module.scss";
import { paragraphTexts, statisticItems } from "./aboutUsTexts";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

export default function AboutUs({ refName }) {
  const { t } = useTranslation();

  return (
    <section
      ref={refName}
      className={style.aboutUs}>
      <div className={style.container}>
        <div className={style.content}>
          <motion.h2 {...animateFromLeft(0, 0.7)} className={style.title}>{t('aboutUs.title')}</motion.h2>
          <div className={style.paragraphs}>
            {paragraphTexts.map((text, index) => (
              <motion.p
                {...animateFromLeft(1)}
                className={style.paragraph}
                key={index}
                dangerouslySetInnerHTML={{ __html: t(`aboutUs.${text}`) }} />
            ))}
          </div>
        </div>
        <motion.div {...animateFromRight(0, 0.2)} className={style.img}> 
        <img src="./images/aboutUs.webp" alt="image of iphone 16" />
        </motion.div>
     
      </div>
    </section>
  )
}

AboutUs.propTypes ={
  refName: PropTypes.object
}