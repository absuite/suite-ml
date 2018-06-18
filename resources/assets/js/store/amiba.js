import http from 'gmf/core/utils/http';
import Tip from 'gmf/components/MdTip'

import MdFormatTime from 'gmf/core/utils/MdFormatTime'
const d = MdFormatTime(new Date(), 'YYYY-MM-DD');
const mutationTypes = {
  SET_PURPOSE: 'setPurpose',

  SET_PURPOSES: 'setPurposes',
  GET_PURPOSES: 'getPurposes',

  GET_PERIODS: 'getPeriods',
  SET_PERIODS: 'setPeriods',

  GET_GROUPS: 'getGroups',
  SET_GROUPS: 'setGroups'
}
// initial state
const state = {
  purpose: null,
  purposes: [],
  periods: [],
  groups: []
}
// getters
const getters = {
  currentPeriod: state => {
    return state.periods.find(function (r) {
      return r.from_date >= d ? r : undefined;
    });
  }
}
// actions
const actions = {
  'config' ({
    dispatch,
    commit
  }, replace) {
    return new Promise((resolve, reject) => {
      http.appConfig("suite.cbo", replace)
        .then(() => {
          resolve(true)
        })
        .catch(err => {
          Tip(err);
          reject(err);
        });
    });

  },
  [mutationTypes.SET_PURPOSE]({
    dispatch,
    commit
  }, purpose) {
    commit(mutationTypes.SET_PURPOSE, purpose);
    dispatch(mutationTypes.GET_PERIODS, true);
    dispatch(mutationTypes.GET_GROUPS, true);
  },
  [mutationTypes.GET_PURPOSES]({
    state,
    commit
  }, replace) {
    return new Promise((resolve, reject) => {
      if (state.purposes == null || state.purposes.length == 0 || replace) {
        http("suite.cbo").get("api/amiba/purposes").then(res => {
          commit(mutationTypes.SET_PURPOSES, res.data.data);
          resolve(res.data.data);
        }, err => {
          Tip(err);
          reject(err);
        });
      } else {
        resolve(state.purposes);
      }
    });
  },
  [mutationTypes.GET_GROUPS]({
    state,
    commit
  }, replace) {
    return new Promise((resolve, reject) => {
      if (state.groups == null || state.groups.length == 0 || replace) {
        http("suite.cbo").get("api/amiba/groups", {
          params: {
            purpose_id: state.purpose ? state.purpose.id : ''
          }
        }).then(res => {
          commit(mutationTypes.SET_GROUPS, res.data.data);
          resolve(res.data.data);
        }, err => {
          Tip(err);
          reject(err);
        });
      } else {
        resolve(state.groups);
      }
    });
  },
  [mutationTypes.GET_PERIODS]({
    state,
    commit
  }, replace) {
    return new Promise((resolve, reject) => {
      if (state.periods == null || state.periods.length == 0 || replace) {
        http("suite.cbo").get("api/amiba/reports/period-info", {
          params: {
            calendar_id: state.purpose ? state.purpose.calendar_id : ''
          }
        }).then(res => {
          commit(mutationTypes.SET_PERIODS, res.data.data.periods);
          resolve(res.data.data.periods);
        }, err => {
          Tip(err);
          reject(err);
        });
      } else {
        resolve(state.periods);
      }
    });
  }
}
// mutations
const mutations = {
  [mutationTypes.SET_PURPOSE](state, purpose) {
    state.purpose = purpose
  },
  [mutationTypes.SET_PURPOSES](state, purposes) {
    state.purposes = purposes
  },
  [mutationTypes.SET_PERIODS](state, periods) {
    state.periods = periods
  },
  [mutationTypes.SET_GROUPS](state, groups) {
    state.groups = groups
  }
}

export default {
  name: 'amiba',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
