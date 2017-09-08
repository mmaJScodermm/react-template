export default (store={
	username=''
},{
	type,payload
} )=>{
	if(type==='USERINFO_USERNAME'){
		return {
			...store,
			username:payload.username
		}
	}
	return store;
}
