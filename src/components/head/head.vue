<template>
    <div class="header">
        <div class="header-bg">
            <img class="header-bg-img" src="src/assets/images/p2.jpg" alt="ddd">
        </div>
        <div class="header-content">
            <div class="header-content-title"><a href="javascript:history.back(-1)">虚拟实验 >
                面向ATM系统的功能测试仿真实验项目</a></div>
            <div class="header-main">
                <div class="header-main-pic"><img src="src/assets/images/p2.jpg" alt=""></div>
                <div class="header-main-detail">
                    <div class="header-main-detail-name">
                        <h3>面向ATM系统的功能测试仿真实验</h3>
                        <ul>
                            <li>实验学时：2</li>
                            <li>学科：工学/计算机/软件工程</li>
                            <li>负责人：李昌清</li>
                            <li>学校：河南科技大学</li>
                        </ul>
                    </div>
                    <div class="header-main-detail-data">
                        <dl>
                            <dt>45233</dt>
                            <dt>累计访问量</dt>
                        </dl>
                        <dl>
                            <dt>2921</dt>
                            <dt>累计学生数</dt>
                        </dl>
                        <dl>
                            <dt>52231</dt>
                            <dt>累计练习数</dt>
                        </dl>
                        <dl>
                            <dt>2881</dt>
                            <dt>累计实验结果</dt>
                        </dl>
                    </div>
                    <div class="header-main-detail-data-btn">
                        <div class="btn-term">当前暂无学习期次</div>
                        <span>开始学习</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <content></content>
</template>

<script setup lang="ts">
    import content from '../center/content.vue'
</script>

<style scoped lang="less">
    .header{
      display: block;
      height: 350px;
    }
</style>
