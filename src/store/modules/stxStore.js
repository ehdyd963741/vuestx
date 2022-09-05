import axios from 'axios';

const state = {
  // gnb 메뉴 데이터
  gnbData: [],
  subdata: [],
  noticeData: [],
  newsData: []
};
const actions = {
  // gnb.json 데이터를 axios로 받아온다.
  // mutation: 즉, state를 업데이트 하기 위해 필요한 메서드(commit)
  fetchGnb({commit}) {
    axios.get('./data/gnb.json')
    .then(response => {
      console.log("axios", response)
      // commit('mutation 메서드 이름', 전달할 값);
      commit('UPDATE_GNB', response.data);
    })
    .catch( err => console.log(err))
  },

  fetchNews({commit}) {
    // news.json 을 axios로 호출함
    axios.get('./data/news.json')
    .then(response => {
      console.log(response)
      // mutation으로 자료를 전송한다. commit 필요
      // axios는 받아온 자료를 .data 에 보관한다.
      commit('UPDATE_NEWS',response.data);
    })
    .catch( err => console.log(err))
  },

  fetchNotice({commit}) {
    axios.get('./data/notice.json')
    .then(response => {
      console.log(response)
      commit('UPDATE_NOTICE',response.data)
    })
    .catch( err => console.log(err))
  }

};
//state 에 값을 업데이트 하기 위한 용
const mutations = {
  //메서드 이름(state,payload(전달재료)) {}
  UPDATE_GNB(state, payload){
    // console.log(payload)
    // 최종적으로 store에 데이터 state.gnbData 업데이트
    state.gnbData = payload;
  },
  UPDATE_NEWS(state, payload){
    // console.log(payload)
    state.newsData = payload;
  },
  UPDATE_NOTICE(state, payload){
    // console.log(payload)
    state.noticeData = payload;
  }

};
const getters = {
  getGnbData(state){
    return state.gnbData;
  },
  getNewsData(state){
    return state.newsData
  },
  getNoticeData(state){
    return state.noticeData
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}