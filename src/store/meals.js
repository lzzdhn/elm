import { defineStore } from "pinia";
export const useMealsStore=defineStore('meals',{
    state:()=>({
        data:[{
            id:'1',
            title:'汉堡包',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:12,
            img:'/imges/1.jpg'
        },
        {
            id:'2',
            title:'香辣鸡腿堡',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:20,
            img:'/imges/2.jpg'
        },
        {
            id:'3',
            title:'巨无霸',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:24,
            img:'/imges/3.jpg'
        },
        {
            id:'4',
            title:'汉堡包',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:21,
            img:'/imges/4.jpg'
        },
        {
            id:'5',
            title:'汉堡包',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:25,
            img:'/imges/5.jpg'
        },
        {
            id:'6',
            title:'汉堡包',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:18,
            img:'/imges/6.jpg'
        },
        {
            id:'7',
            title:'汉堡包',
            desc:'百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄的汉堡',
            price:20,
            img:'/imges/7.jpg'
        },
        ],
        keyword:''
    }),
    getters:{
        filterMeals:state=>{
            return state.data.filter(item=>item.title.indexOf(state.keyword) !=-1)
        },
         //获取购物车中的所有商品
        cartMeals:(state)=>{
            return state.data.filter((item)=>item.count > 0)
        },
        //获取购物车中的商品的总数量
        totalCount:state=>{
            //如果购物车没有商品直接返回0
           if( state.cartMeals.length <=0) return 0
           //购物车中有商品,计算商品的总数量
           return state.cartMeals.reduce((result, item) => 
            result+item.count , 0)
        },
        //获取购物车中商品的总价格
        amount:state=>{
              //如果购物车没有商品直接返回0
           if( state.cartMeals.length <=0) return 0
           //购物车中有商品,计算商品的总数量
           return state.cartMeals.reduce((result, item) => 
            result+item.count*item.price , 0)
        }

    },
   
    actions:{
        addMealToCart(meal){
            //修改食物的数量
            //meal还没有添加到购物车中
            if(isNaN(meal.count)){
                meal.count = 0
            }
            meal.count++
        },
        subMealFromCart(meal){
            if(isNaN(meal.count) || meal.count <=0) return
             meal.count--
        },

        clearCart(){
            this.cartMeals.forEach((item)=>(item.count=0))
        }
       
    } 
})