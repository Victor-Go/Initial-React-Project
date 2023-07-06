import { useTranslation } from 'react-i18next'
import styles from './Fallback.module.scss'

const Fallback = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={styles['base-skeleton']}>
      <div className={styles['base-skeleton__text']}>{t('Tron')}</div>
    </div>
  )
}

export default Fallback
