import React from 'react';
import styles from './Layout.module.scss';
import { Layout as AntLayout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content } = AntLayout;

export const Layout = (): React.JSX.Element => {
    const location = useLocation();

    const menuItems = [
        {
            key: '/',
            label: <Link to="/">Todo List</Link>,
        },
        {
            key: '/add',
            label: <Link to="/add">Add todo</Link>,
        },
    ];

    return (
        <AntLayout className={styles.layout}>
            <Header className={styles.layout__header}>
                <Menu
                    className={styles.layout__menu}
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Header>
            <Content className={styles.layout__content}>
                <div className={styles.layout__container}>
                    <Outlet />
                </div>
            </Content>
        </AntLayout>
    );
};
