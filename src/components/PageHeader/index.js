import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.less';

export default class PageHeader extends PureComponent {
	render() {
		const { renderBreadcrumb } = this.context;
		const { title, logo, action, content, extraContent, tabList, className, showBreadcrumb } = this.props;
		const clsString = classNames(styles.pageHeader, className);
		const tabDefaultValue = tabList && (tabList.filter(item => item.default)[0] || tabList[0]);

		return (
			<div className={clsString}>
				<div className={styles.detail}>
					{logo && <div className={styles.logo}>{logo}</div>}
					<div className={styles.main}>
						<div className={styles.row}>
							{title && <h1 className={styles.title}>{title}</h1>}
							{action && <div className={styles.action}>{action}</div>}
						</div>
						<div className={styles.row}>
							{content && <div className={styles.content}>{content}</div>}
							{extraContent && <div className={styles.extraContent}>{extraContent}</div>}
						</div>
					</div>
				</div>
				{
					tabList &&
					tabList.length &&
					<Tabs
						className={styles.tabs}
						defaultActiveKey={(tabDefaultValue && tabDefaultValue.key)}
						onChange={this.onChange}
					>
						{
							tabList.map(item => <TabPane tab={item.tab} key={item.key} />)
						}
					</Tabs>
				}
			</div>
		)
	}
}



PageHeader.contextTypes = {
	renderBreadcrumb: PropTypes.node,
	location: PropTypes.object,
	breadcrumbNameMap: PropTypes.object,
};

PageHeader.propTypes = {
	showBreadcrumb: PropTypes.bool,
}
PageHeader.defaultProps = {
	showBreadcrumb: true
}