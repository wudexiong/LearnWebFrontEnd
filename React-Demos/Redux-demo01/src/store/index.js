import { createStore, applyMiddleware, compose } from 'redux' //要使用中间件就必须引入applyMiddleware，compose是增强函数
import reducer from './Reducer'
// import thunk from 'redux-thunk' 
import createSagaMiddleware from 'redux-saga'//这个也是一个redux的中间件，和thunk差不多
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();
// 这句话的意思就是看window里有没有这个方法，有则执行这个方法（不要被大写的方法名吓到）就是要使用redux dev tools工具
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// 还需要使用中间件,thunk是dispatch的增强，可以在dispatch一个action之后，到达reducer之前进行一些额外的操作
// 使用thunk
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// 创建仓库
const store = createStore(reducer, enhancer)

sagaMiddleware.run(mySaga)
export default store