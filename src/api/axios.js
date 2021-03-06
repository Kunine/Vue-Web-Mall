import axios from 'axios'
import { Message } from 'iview';
import store from '@/store/index'
import router from '@/router';

const service = axios.create({
	timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => config, error => Promise.reject(error));

// respone拦截器
service.interceptors.response.use(
	response => {
		const res = response.data;
		if (res.code === 5005) {
			sessionStorage.clear();
			store.dispatch('changeLogin', true);
			return Promise.reject(res)
		} else if (res.code !== 2000) {
			return Promise.reject(res)
		} else {
			return res
		}
	},
	error => Promise.reject(error)
)

export default service;