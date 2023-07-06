import { useTranslation } from 'react-i18next'
import styles from './NotFound.module.scss'

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <div>{t('Error.404')}</div>
    </>
  )
}

export default NotFoundPage
