<template>
  <page-content page-title="介绍">
    <div class="main-content">
      <div class="introduction">
        <div class="button-actions">
          <div class="introduction">vue-tkui</div>
        </div>
        <div>
          <h4 class="md-title">安装方法</h4>
          <p>
            在主题化页面获取主题配置参数，将参数存储为后缀为scss的文件。例如：<b>_variables.scss</b>,将该文件放入项目中。
          </p>
          <p>
            在文件的同级目录下新建一个sass文件，在文件中分别引入配置文件 <b>_variables.scss</b> 与vue-tkui的 <b>sass样式表</b>：
          </p>
          <code-block lang="sass">
            @import './_variables.scss';
            @import '~vue-tkui/src/sass/all.scss';
          </code-block>
          <p>
            在项目中用任意方式引入该文件即可。
          </p>
        </div>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .introduction {
    max-width: 960px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;

    img {
      margin: -45px auto;
      display: block;
    }
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }
  }

  .row {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>
