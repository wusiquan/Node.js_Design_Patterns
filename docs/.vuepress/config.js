module.exports = {
  base: 'node.js_design_patterns',
  title: 'Node.js设计模式(第2版)',
  description: 'Node.js设计模式学习',

  // 默认主题的配置
  themeConfig: {
    nav: [
      { text: '学习', link: '/' }
    ],

    sidebar: [
      {
        title: '学习',
        collapsable: false,
        children: [
          ['/chapter5', '第五章 Coding With Stream']
        ]
      }
    ]
  }
}