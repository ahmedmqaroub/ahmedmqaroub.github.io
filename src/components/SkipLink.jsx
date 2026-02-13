import React from 'react'
import { t } from '../lib/i18n'

export default function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      {t('nav.home')}
    </a>
  )
}
