// theme.config.tsx
import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>CSU Wiki</span>,
  project: {
    // 右上角 Github icon 点击跳转信息
    link: 'https://github.com/SkinCrab'
  },
  // 文档仓库链接
  docsRepositoryBase: 'https://github.com/SkinCrab/csuwiki',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        // 设置浏览器标题
        titleTemplate: '%s – CSUer'
      }
    }
  },
  // 发现文档错误时，可点击直接去 GitHub 编辑内容
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  // 问题反馈配置，可以自动跳转到 github issue
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  // 页面底部版权信息
  footer: {
    text: `MIT 2023 © GBYYY.`
  }
}

export default config