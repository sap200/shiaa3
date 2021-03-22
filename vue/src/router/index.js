import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import BuyAsset from '@/views/BuyAsset.vue'
import ListAsset from '@/views/ListAsset.vue'
import SendAsset from '@/views/SendAsset.vue'
import PoolView from '@/views/PoolView.vue'
import Game from '@/views/Game.vue'
import Winner from '@/views/Winner.vue'
import Member from '@/views/Member.vue'
import IbcSent from '@/views/IbcSent.vue'
import IbcTimeout from '@/views/IbcTimeout.vue'


const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types }, 
	{ path: '/buyasset', component: BuyAsset },
	{ path: '/listasset', component: ListAsset}, 
	{ path: '/sendmyasset', component: SendAsset},
	{ path: '/poolview', component: PoolView},
	{ path: '/gamble', component: Game}, 
	{ path: '/winners', component: Winner},
	{ path: '/members', component: Member}, 
	{ path: '/ibcsent', component: IbcSent}, 
	{ path: '/ibctimedout', component: IbcTimeout}
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
