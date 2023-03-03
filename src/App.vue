<template>
  <div>
    <div class="header">
      <div class="header-bg">
        <img class="header-bg-img" src="./assets/images/p2.jpg">
      </div>
      <div class="header-content">
        <div class="header-content-title"><a href="javascript:history.back(-1)">虚拟实验 >
          面向ATM系统的功能测试仿真实验项目</a></div>
        <div class="header-main">
          <div class="header-main-pic"><img src="./assets/images/p2.jpg" alt=""></div>
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

      <div class="center">
        <div class="center-menu">
          <div v-for="(item, index) in list" class="menu-item" @click="change(index)">
            {{ item.message }}
          </div>
        </div>
        <div class="center-content">
          <div :class="{active: flagList[0].flag}">
            <h3>实验简介（实验的必要性及实用性，教学设计的合理性，实验系统的先进性）</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;（1）实验的必要性及实用性
              <br>
              软件测试的目的是以最少的人力、物力和时间找出软件中潜在的各种缺陷，通过修正各种缺陷提高软件质量，避免软件发布后潜在的软件缺陷造成商业风险。同时测试过程中得到的测试结果和测试信息，也是后续项目开发和测试过程改进的重要依据，以避免将来的项目开发和测试中出现重复错误。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前软件功能测试实验教学存在以下局限性：
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）缺乏软件测试的系统案例。软件测试教学中的案例经常是对结构简单、功能有限的小规模软件的测试，比如许多学校在讲解功能测试时，会以“记事本”程序为例，但随着软件行业的飞速发展，各种应用业务系统愈加复杂，软件缺陷产生的概率增大，同时测试难度越来越大。传统的教学案例已经不能适应软件测试需求的变化。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）教学内容与实际工作脱节。软件测试课程的教学必须面向企业的实际需求，对接生产实践场景，学生才能学到实际工作中常用的技能，才能全面地提高软件测试实践教学水平。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该项目通过实现ATM系统数据仿真、业务流程仿真等操作还原实际的ATM系统运行效果，仿真ATM系统功能测试具体操作流程，模拟软件测试过程。项目具有很强的交互性和科学性。该项目建成后可满足高等学校软件类软件测试课程功能测试实验教学环节的需要，尤其适用于线上教学、远程教学。

              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）教学设计的合理性

              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）项目运用于教学的合理性。
              项目利用虚拟现实、计算机网络、多媒体等技术构建基于某一行业类型的虚拟的ATM系统，并附有ATM系统的需求规格说明书，按照需求规格说明书测试该ATM系统的各项功能，检查系统的功能是否符合规格说明的要求，检测ATM业务流程能否正常使用，测试出系统中的缺陷，给出测试结果报告，这种实验教学体系，使学生不受时间、不受地点限制，通过仿真实验学习软件测试有关技术和测试流程，激发学生的学习兴趣，增强实验效果，提高实验教学质量，强化专业教学效果，有效提高教学深度。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）项目技术实现合理性。
              项目的开发采用3D仿真技术，VR技术，WebGL技术，采用的技术方法成熟可靠，系统可维护性好。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）教学服务团队建设合理性。
              项目团队人员包括高校专业教师、高校实验教学人员、企业技术人员，结构合理，高校人员具备丰富的一线教学经验，积极参与各项教学改革及培训活动，发表多篇教学论文，企业人员具备丰富的相关技术从业经验，校企合作共同承担虚拟仿真实验设计、开发及运营，保证项目顺利进行。

              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）实验系统的先进性

              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）实验设计模块化：就ATM管理软件而言，一般按照功能模块来组织，实验过程以任务为引导，学生按照系统引导，进行不同模块的测试工作，由系统记录测试过程和测试结果，让学生实时掌握实验的步骤与测试流程，并对学生的测试结果进行评价，提出针对性的建议，真正做到“以学生为中心”。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）理论联系实际：面向ATM系统的功能测试虚拟仿真实验可以让学生直接体验现代IT业中的软件测试方法和管理模式，达到学生掌握的知识与社会应用同步的效果。
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）实验涉及知识面广：ATM系统本身是一种业务流程很复杂，单据报表众多，逻辑性很强的系统，其功能测试具体可以分为数据测试、业务流程测试、报表测试，不同功能测试特点不同，覆盖的知识点多，通过实验训练能够强化学生对软件测试理论及用例设计方法的掌握，进一步提高学生解决实际问题能力。
            </p>
          </div>
          <div :class="{active: flagList[1].flag}">
            <div class="item-teacher">
              <div class="teacher-header">
                <div><img src="./assets/images/aa.png" alt=""></div>
                <div class="teacher-detail">
                  <h5>河南科技大学 • 河南科技大学</h5>
                  <p>讲师</p>
                </div>
              </div>

              <div class="role">
                <p>李昌清：男，1979生，河南科技大学讲师、硕士研究生。 </p>
              </div>


            </div>
          </div>
          <div :class="{active: flagList[2].flag}">
            <h3>本仿真实验教学过程为三个阶段：演示学习、交互式测试实施、在线测试三个阶段。</h3>
            <p>（1）演示学习<br> 步骤1：学生通过演示阶段的学习，了解本项目软件功能测试的全过程（视频、图文讲解）。
              <br> （2）交互式测试实施
              <br> 结合所学的知识点，通过人机交互技术，选择不同的功能模块，在虚拟环境中完成ATM系统功能测试的虚拟实验。主要测试过程包括以下步骤：
              <br> 步骤2：ATM系统认知（视频、图文讲解）：学生通过交互式操作漫游ATM系统全景，熟悉系统的总体功能、模块划分及各业务流程。
              <br> 步骤3：实验要求认知：调取实验目的、内容（视频、图文讲解）。
              <br> 步骤4：功能测试核心知识点的认知：学习功能测试相关知识（视频、图文讲解）。
              <br> 步骤5：创建一个测试项目管理，以树形目录方式管理整个测试过程。
              <br> 步骤6：分析测试需求，确定要测试的功能。
              <br> 步骤7：制定测试计划，填写测试计划书。
              <br> 步骤8：采用不同的方法设计测试用例，填写测试用例表。
              <br> ①利用等价类划分法设计测试用例，填写测试用例表；
              <br> ②利用边界值分析法设计测试用例，填写测试用例表；
              <br> ③利用因果图与决策表法设计测试用例，填写测试用例表；
              <br> ④利用场景法设计测试用例，填写测试用例表；
              <br> ⑤利用错误推测法设计测试用例，填写测试用例表；
              <br> ⑥利用正交实验设计法设计测试用例，填写测试用例表。
              <br> 步骤9：测试用例评估。
              <br> 步骤10：测试执行。
              <br> 步骤11：填写缺陷报告。
              <br> 步骤12：编写测试报告。
              <br> （3）在线测试
              <br> 步骤13：对理论与实践的知识进行在线测试，考核相关的知识点，对所学的知识进行整理消化吸收。
            </p>
          </div>
          <div :class="{active: flagList[3].flag}">4</div>
          <div :class="{active: flagList[4].flag}">5</div>
          <div :class="{active: flagList[5].flag}">6</div>
          <div :class="{active: flagList[6].flag}">7</div>
          <div :class="{active: flagList[7].flag}">
            <div class="evaluate">
              <div><img src="./assets/images/p2.jpg" alt=""></div>
              <div>
                <h5>面向ATM系统的功能测试仿真实验项目</h5>
                <p>评价体系创新
                  <br>
                  传统的教学评价过程是静态的，仅能监测到目标达成与否，该项目实施后，教师借助虚拟仿真软件，让学生进行在线考核，考核过程可全面通过系统全程监测，考核之后系统自动评分，根据数据收集分析，了解学生学习各个知识点情况，准确把握不同层次学生学习中的问题点、兴趣点。实现学习过程中的动态监测，动态评价。
                </p>
              </div>
            </div>
          </div>
          <div :class="{active: flagList[8].flag}">9</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const list = ref([{message: "项目介绍"},
  {message: "师资团队"},
  {message: "实验指南"},
  {message: "课程资料"},
  {message: "实验原理"},
  {message: "学习记录"},
  {message: "数据分析"},
  {message: "课程评审"},
  {message: "互问互答"}])


const flagList = ref([{flag: false}, {flag: true}, {flag: true}, {flag: true}, {flag: true}, {flag: true}, {flag: true}, {flag: true}, {flag: true}])

const change = (index) => {
  console.log(index)
  for (let i = 0; i < flagList.value.length; i++) {
    flagList.value[i].flag = true
  }
  flagList.value[index].flag = false
}

</script>

<style scoped lang="less">
.active {
  display: none;
}
</style>
