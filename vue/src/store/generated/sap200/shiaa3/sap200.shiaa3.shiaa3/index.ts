import { txClient, queryClient } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { Pool2Ticket } from "./module/types/shiaa3/Pool2Ticket"
import { Pool0Ticket } from "./module/types/shiaa3/Pool0Ticket"
import { Pool3Ticket } from "./module/types/shiaa3/Pool3Ticket"
import { Pool4Ticket } from "./module/types/shiaa3/Pool4Ticket"
import { Pool1Ticket } from "./module/types/shiaa3/Pool1Ticket"
import { Winners } from "./module/types/shiaa3/Winners"
import { Members } from "./module/types/shiaa3/Members"
import { JoinPoolAndStakeAsset } from "./module/types/shiaa3/JoinPoolAndStakeAsset"


async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
        Winners: {},
        WinnersAll: {},
        Members: {},
        MembersAll: {},
        Pool4Ticket: {},
        Pool4TicketAll: {},
        Pool3Ticket: {},
        Pool3TicketAll: {},
        Pool2Ticket: {},
        Pool2TicketAll: {},
        Pool1Ticket: {},
        Pool1TicketAll: {},
        Pool0Ticket: {},
        Pool0TicketAll: {},
        JoinPoolAndStakeAsset: {},
        JoinPoolAndStakeAssetAll: {},
        
        _Structure: {
            Pool2Ticket: getStructure(Pool2Ticket.fromPartial({})),
            Pool0Ticket: getStructure(Pool0Ticket.fromPartial({})),
            Pool3Ticket: getStructure(Pool3Ticket.fromPartial({})),
            Pool4Ticket: getStructure(Pool4Ticket.fromPartial({})),
            Pool1Ticket: getStructure(Pool1Ticket.fromPartial({})),
            Winners: getStructure(Winners.fromPartial({})),
            Members: getStructure(Members.fromPartial({})),
            JoinPoolAndStakeAsset: getStructure(JoinPoolAndStakeAsset.fromPartial({})),
            
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
        getWinners: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Winners[JSON.stringify(params)] ?? {}
		},
        getWinnersAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.WinnersAll[JSON.stringify(params)] ?? {}
		},
        getMembers: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Members[JSON.stringify(params)] ?? {}
		},
        getMembersAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MembersAll[JSON.stringify(params)] ?? {}
		},
        getPool4Ticket: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool4Ticket[JSON.stringify(params)] ?? {}
		},
        getPool4TicketAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool4TicketAll[JSON.stringify(params)] ?? {}
		},
        getPool3Ticket: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool3Ticket[JSON.stringify(params)] ?? {}
		},
        getPool3TicketAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool3TicketAll[JSON.stringify(params)] ?? {}
		},
        getPool2Ticket: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool2Ticket[JSON.stringify(params)] ?? {}
		},
        getPool2TicketAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool2TicketAll[JSON.stringify(params)] ?? {}
		},
        getPool1Ticket: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool1Ticket[JSON.stringify(params)] ?? {}
		},
        getPool1TicketAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool1TicketAll[JSON.stringify(params)] ?? {}
		},
        getPool0Ticket: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool0Ticket[JSON.stringify(params)] ?? {}
		},
        getPool0TicketAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool0TicketAll[JSON.stringify(params)] ?? {}
		},
        getJoinPoolAndStakeAsset: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.JoinPoolAndStakeAsset[JSON.stringify(params)] ?? {}
		},
        getJoinPoolAndStakeAssetAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.JoinPoolAndStakeAssetAll[JSON.stringify(params)] ?? {}
		},
        
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('init')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach((subscription) => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		async QueryWinners({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryWinners( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryWinners( key.id )).data
				
				commit('QUERY', { query: 'Winners', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryWinners', payload: { options: { all }, params: {...key},query }})
				return getters['getWinners']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryWinners', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryWinnersAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryWinnersAll( query)).data:(await (await initQueryClient(rootGetters)).queryWinnersAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryWinnersAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'WinnersAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryWinnersAll', payload: { options: { all }, params: {...key},query }})
				return getters['getWinnersAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryWinnersAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryMembers({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryMembers( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryMembers( key.id )).data
				
				commit('QUERY', { query: 'Members', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMembers', payload: { options: { all }, params: {...key},query }})
				return getters['getMembers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryMembers', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryMembersAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryMembersAll( query)).data:(await (await initQueryClient(rootGetters)).queryMembersAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryMembersAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'MembersAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMembersAll', payload: { options: { all }, params: {...key},query }})
				return getters['getMembersAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryMembersAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool4Ticket({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool4Ticket( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryPool4Ticket( key.id )).data
				
				commit('QUERY', { query: 'Pool4Ticket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool4Ticket', payload: { options: { all }, params: {...key},query }})
				return getters['getPool4Ticket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool4Ticket', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool4TicketAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool4TicketAll( query)).data:(await (await initQueryClient(rootGetters)).queryPool4TicketAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryPool4TicketAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Pool4TicketAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool4TicketAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPool4TicketAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool4TicketAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool3Ticket({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool3Ticket( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryPool3Ticket( key.id )).data
				
				commit('QUERY', { query: 'Pool3Ticket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool3Ticket', payload: { options: { all }, params: {...key},query }})
				return getters['getPool3Ticket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool3Ticket', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool3TicketAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool3TicketAll( query)).data:(await (await initQueryClient(rootGetters)).queryPool3TicketAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryPool3TicketAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Pool3TicketAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool3TicketAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPool3TicketAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool3TicketAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool2Ticket({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool2Ticket( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryPool2Ticket( key.id )).data
				
				commit('QUERY', { query: 'Pool2Ticket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool2Ticket', payload: { options: { all }, params: {...key},query }})
				return getters['getPool2Ticket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool2Ticket', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool2TicketAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool2TicketAll( query)).data:(await (await initQueryClient(rootGetters)).queryPool2TicketAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryPool2TicketAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Pool2TicketAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool2TicketAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPool2TicketAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool2TicketAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool1Ticket({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool1Ticket( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryPool1Ticket( key.id )).data
				
				commit('QUERY', { query: 'Pool1Ticket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool1Ticket', payload: { options: { all }, params: {...key},query }})
				return getters['getPool1Ticket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool1Ticket', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool1TicketAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool1TicketAll( query)).data:(await (await initQueryClient(rootGetters)).queryPool1TicketAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryPool1TicketAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Pool1TicketAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool1TicketAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPool1TicketAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool1TicketAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool0Ticket({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool0Ticket( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryPool0Ticket( key.id )).data
				
				commit('QUERY', { query: 'Pool0Ticket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool0Ticket', payload: { options: { all }, params: {...key},query }})
				return getters['getPool0Ticket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool0Ticket', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryPool0TicketAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryPool0TicketAll( query)).data:(await (await initQueryClient(rootGetters)).queryPool0TicketAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryPool0TicketAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Pool0TicketAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool0TicketAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPool0TicketAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryPool0TicketAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryJoinPoolAndStakeAsset({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryJoinPoolAndStakeAsset( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryJoinPoolAndStakeAsset( key.id )).data
				
				commit('QUERY', { query: 'JoinPoolAndStakeAsset', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryJoinPoolAndStakeAsset', payload: { options: { all }, params: {...key},query }})
				return getters['getJoinPoolAndStakeAsset']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryJoinPoolAndStakeAsset', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryJoinPoolAndStakeAssetAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryJoinPoolAndStakeAssetAll( query)).data:(await (await initQueryClient(rootGetters)).queryJoinPoolAndStakeAssetAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryJoinPoolAndStakeAssetAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'JoinPoolAndStakeAssetAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryJoinPoolAndStakeAssetAll', payload: { options: { all }, params: {...key},query }})
				return getters['getJoinPoolAndStakeAssetAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryJoinPoolAndStakeAssetAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		
		async sendMsgDeleteMembers({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteMembers(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteMembers:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreatePool1Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool1Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool1Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteWinners({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteWinners(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteWinners:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreatePool3Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool3Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool3Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateJoinPoolAndStakeAsset({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateJoinPoolAndStakeAsset(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateJoinPoolAndStakeAsset:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreatePool4Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool4Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool4Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeletePool1Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool1Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool1Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateWinners({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateWinners(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateWinners:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeletePool3Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool3Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool3Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateMembers({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateMembers(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateMembers:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeletePool0Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool0Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool0Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdatePool3Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool3Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool3Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdatePool0Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool0Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool0Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreatePool2Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool2Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool2Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateJoinPoolAndStakeAsset({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateJoinPoolAndStakeAsset(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateJoinPoolAndStakeAsset:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteJoinPoolAndStakeAsset({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteJoinPoolAndStakeAsset(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteJoinPoolAndStakeAsset:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateMembers({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateMembers(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateMembers:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeletePool2Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool2Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool2Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdatePool4Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool4Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool4Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreatePool0Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool0Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool0Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateWinners({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateWinners(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateWinners:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdatePool1Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool1Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool1Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeletePool4Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool4Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool4Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdatePool2Ticket({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool2Ticket(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool2Ticket:Send', 'Could not broadcast Tx.')
				}
			}
		},
		
		async MsgDeleteMembers({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteMembers(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteMembers:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreatePool1Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool1Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool1Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteWinners({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteWinners(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteWinners:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreatePool3Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool3Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool3Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateJoinPoolAndStakeAsset({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateJoinPoolAndStakeAsset(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateJoinPoolAndStakeAsset:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreatePool4Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool4Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool4Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeletePool1Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool1Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool1Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateWinners({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateWinners(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateWinners:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeletePool3Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool3Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool3Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateMembers({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateMembers(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateMembers:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeletePool0Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool0Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool0Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdatePool3Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool3Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool3Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool3Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdatePool0Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool0Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool0Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreatePool2Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool2Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool2Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateJoinPoolAndStakeAsset({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateJoinPoolAndStakeAsset(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateJoinPoolAndStakeAsset:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteJoinPoolAndStakeAsset({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteJoinPoolAndStakeAsset(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteJoinPoolAndStakeAsset:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteJoinPoolAndStakeAsset:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateMembers({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateMembers(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateMembers:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateMembers:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeletePool2Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool2Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool2Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdatePool4Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool4Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool4Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreatePool0Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreatePool0Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreatePool0Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePool0Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateWinners({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateWinners(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateWinners:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateWinners:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdatePool1Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool1Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool1Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool1Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeletePool4Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeletePool4Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeletePool4Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePool4Ticket:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdatePool2Ticket({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdatePool2Ticket(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdatePool2Ticket:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePool2Ticket:Create', 'Could not create message.')
				}
			}
		},
		
	}
}
