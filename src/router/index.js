import { createRouter, createWebHistory} from 'vue-router'
// router 는 링크 기능 이다.
// 모든 vue 에서 사용하기 위해서 export하겠다.
// router라는 객체에다가 기능을 담겠다.
const router = createRouter({
  // 웹브라우저 주소창의 내요을 깨끗하게 (#없게 보이도록)
  history: createWebHistory(),
  // {path:'/home', name: 'Home', computed: HomeView},
  // {path:'/good', name: 'Good', computed: GoodView}
  routes: []
});

// 외부로 내보내서 사용하겠다.
export default router;