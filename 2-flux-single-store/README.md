# Single Store

> 一个单 Store 包含 Container 例子，旨在拆解业务组件和通用组件，Component 不理数据来源，交由 Container 负责黏合数据。

### 抽象概念属于谁？

> 这里的核心问题在于抽象概念到底属于谁的，以及那些抽象概念可以被弱化

* Component —— 不仅仅是`Javascript`层面的组件，而是将结构、样式、逻辑、数据结构（注意不是数据本身）合在一起看成一个组件
  * State —— 组件自维护状态
  * Property —— 组件外部传递属性
  * `Attribute —— 组件自维护属性，不用于渲染`
  * `Context —— 上下文，和渲染没关系`
* Container —— 为了让 Component 完全脱离业务，Container 用于将 Store 和 Component 黏在一起
* Action —— 与原始 Event 分离，则不同 Event 可能触发同一个 Action，同一个 Event 在不同 State 下可能触发不同 Action
* Reducer —— 由于 Action 和当前 Store State 产生新的 State 的纯函数（仅根据输入返回输出，自身不维护状态）：`newState = reduce(state, action)`
* Store —— 应用维护 State 的地方
* Dispatcher —— 派发 Action 的地方

### 角色划分

> 这里分工主要是前端 Component 开发之间的分工，所以带来跨 Component 的 Action、Reducer、Store 复用，相当于给开发者抽象出可复用的部分。

* 前端组件开发 —— 脱离业务层的组件开发
* 业务组件开发 —— 业务组件 & 业务数据的粘合

### 推荐实践
