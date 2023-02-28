const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: '首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../pages/front/RegisterPage.vue'),
        meta: {
          title: '註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/front/LoginPage.vue'),
        meta: {
          title: '登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'tickets',
        name: 'tickets',
        component: () => import('../pages/front/TicketsPage.vue'),
        meta: {
          title: '票卷探索',
          login: false,
          admin: false
        }
      },
      {
        path: 'ticket/:id',
        name: 'ticket',
        component: () => import('../pages/front/TicketPage.vue'),
        meta: {
          title: '票卷',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../pages/front/CartPage.vue'),
        meta: {
          title: '購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../pages/front/OrdersPage.vue'),
        meta: {
          title: '訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'guides',
        name: 'guides',
        component: () => import('../pages/front/GuidesPage.vue'),
        meta: {
          title: '攻略',
          login: true,
          admin: false
        }
      },
      {
        path: 'CreditCard',
        name: 'CreditCard',
        component: () => import('../pages/front/CreditCard.vue'),
        meta: {
          title: '信用卡結帳',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: '',
        name: 'user-home',
        component: () => import('../pages/user/UserHomePage.vue'),
        meta: {
          title: '會員首頁',
          login: true,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'user-cart',
        component: () => import('../pages/user/UserCartPage.vue'),
        meta: {
          title: '會員購物車頁',
          login: true,
          admin: false
        }
      },
      {
        path: 'archive',
        name: 'user-archive',
        component: () => import('../pages/user/UserArchivePage.vue'),
        meta: {
          title: '會員典藏頁',
          login: true,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'user-order',
        component: () => import('../pages/user/UserOrderPage.vue'),
        meta: {
          title: '會員訂單頁',
          login: true,
          admin: false
        }
      },
      {
        path: 'calender',
        name: 'user-calender',
        component: () => import('../pages/user/UserCalenderPage.vue'),
        meta: {
          title: '會員行事曆',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/MapLayout.vue'),
    children: [
      {
        path: '',
        name: 'user-home',
        component: () => import('../pages/map/AutocompletePage.vue'),
        meta: {
          title: '地圖',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('../pages/admin/HomePage.vue'),
        meta: {
          title: '管理員首頁',
          login: true,
          admin: true
        }
      },
      {
        path: 'user',
        name: 'admin-user',
        component: () => import('../pages/admin/UsersPage.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'tickets',
        name: 'admin-tickets',
        component: () => import('../pages/admin/TicketsPage.vue'),
        meta: {
          title: '票券管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('../pages/admin/OrdersPage.vue'),
        meta: {
          title: '訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'guide',
        name: 'admin-guide',
        component: () => import('../pages/admin/GuidePage.vue'),
        meta: {
          title: '文章管理',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
