import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Steps } from 'uiw';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      steps: [{
        title: '第一步',
        content: '注册一个账号',
      }, {
        title: '第二步',
        content: '填写个人信息',
      }, {
        title: '第三部',
        content: '验证邮箱'
      }]
    }
  }
  render() {
    const { current, steps } = this.state;
    const conStyle = { minHeight: 200, backgroundColor: '#fafafa', textAlign: 'center', borderRadius: 6, paddingTop: 80, marginTop: 15 }
    return (
      <PageHeaderLayout title="分步表单" content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
        <div>
          <Steps current={current}>
            {steps.map(item => <Steps.Step key={item.title} title={item.title} />)}
          </Steps>
        </div>
      </PageHeaderLayout>
    );
  }
}
