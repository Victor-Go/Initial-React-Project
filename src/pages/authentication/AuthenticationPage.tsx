import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import styles from './Authentication.module.scss'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setUserInfo } from '@src/stores/userInfo/userInfoStore'
import { SpecialRoutePaths } from '@src/router/config'

const onFinishFailed = (errorInfo: any) => {
  console.log('Validation failed', errorInfo)
}

const AuthenticationPage = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state: any) => state)

  useEffect(() => {
    if (userInfo.email) {
      navigate(SpecialRoutePaths.rootPage)
    }
  }, [userInfo])

  const onFinish = (values: any) => {
    dispatch(
      setUserInfo({
        email: values.email
      })
    )
  }

  return (
    <div className={styles.authentication}>
      <div className={styles['authentication__background-image']}></div>
      <div className={styles['authentication-box']}>
        <Form
          name='authentication'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label={t('Account.Email')}
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: t('Account.InvalidEmail')
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('Account.Password')}
            name='password'
            rules={[{ required: true, message: t('Account.InvalidPassword') }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>{t('Account.RememberMe')}</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              {t('Account.Login')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AuthenticationPage
