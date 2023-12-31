<%@ include file="/resource/jsp/common.jsp"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="com.landray.kmss.sys.notify.util.SysNotifyConfigUtil"%>
<%@page import="com.landray.kmss.util.*"%>
<%@page import="java.util.Map"%>
<%@page import="com.landray.kmss.third.pda.util.PdaFlagUtil"%>
<%@page import="com.landray.kmss.third.pda.service.IPdaDataShowService"%>
<%@page import="com.landray.kmss.sys.notify.model.SysNotifyTodo"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="com.sunbor.web.tag.Page"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="com.landray.kmss.third.pda.model.PdaRowsPerPageConfig"%>
<%@page import="com.landray.kmss.sys.notify.model.SysNotifyTodoDoneInfo"%>
<%
  	Map<String,String> map=((IPdaDataShowService)SpringBeanUtil.getBean("pdaDataShowService")).getSupportPdaCfgMap();
  	String appFlag="";
  	String[] extendArr=(new PdaRowsPerPageConfig()).getFdExtendsUrl();
  	if(PdaFlagUtil.checkClientIsPdaApp(request))
	 	appFlag="isAppflag=1";
  	String prefix = PdaFlagUtil.getUrlPrefix(request);
  	
  	Page queryPage= (Page)request.getAttribute("queryPage");
  	JSONObject viewObj=new JSONObject();
	int docCount=queryPage.getTotalrows();
	viewObj.accumulate("pageCount",queryPage.getTotal());//所有页数
	viewObj.accumulate("pageno",queryPage.getPageno());  //当前页码
	viewObj.accumulate("count",docCount);                //文档总数
	if(queryPage.getEnd()<docCount-1)
		viewObj.accumulate("nextPageStart",queryPage.getEnd()+1); //下页开始数
	JSONArray docArr=new JSONArray();
	for(Object notifyModel:queryPage.getList()){
		JSONObject model=new JSONObject();
		String url="";
		String linkUrl="";
		SysNotifyTodo todo=null;
		if(notifyModel instanceof SysNotifyTodo){
			todo=(SysNotifyTodo)notifyModel;
			url="/sys/notify/sys_notify_todo/sysNotifyTodo.do?method=view&fdId=" + todo.getFdId();
			linkUrl=todo.getFdLink();
		}else if(notifyModel instanceof SysNotifyTodoDoneInfo){
			todo=((SysNotifyTodoDoneInfo)notifyModel).getTodo();
			url = todo.getFdLink(); 
			linkUrl=url;
		}
		url= url + (url.indexOf("?")>-1?"&":"?") +(StringUtil.isNull(appFlag)?"":appFlag);
		//linkUrl=linkUrl.startsWith("/")?"":linkUrl;
		boolean isDisplay=false;
		if(StringUtil.isNotNull(linkUrl) && extendArr!=null){
			for(int i=0;i<extendArr.length;i++){
				if(StringUtil.isNotNull(extendArr[i]) && linkUrl.toLowerCase().indexOf(extendArr[i].toLowerCase())>-1){
					isDisplay=true;
					break;
				}
			}
		}	
		String subject=todo.getSubject4View();
		if(SysNotifyConfigUtil.getFdDisplayAppNameHome()==1)
			if(StringUtil.isNotNull(todo.getFdAppName()))
				subject=ResourceUtil.getString("sysNotifyTodo.todo.appTitle.left","sys-notify")+todo.getFdAppName()+ResourceUtil.getString("sysNotifyTodo.todo.appTitle.right","sys-notify")+subject;
		model.accumulate("subject",subject);
		model.accumulate("summary",DateUtil.convertDateToString(todo.getFdCreateTime(),DateUtil.PATTERN_DATETIME));
		model.accumulate("type","doc");
		if((StringUtil.isNotNull(todo.getFdModelName())&& map.get(todo.getFdModelName())!=null)||(isDisplay==true)){
			if(url.startsWith("/"))
				url = prefix + url.substring(1);
			model.accumulate("url",url);
		}else{
			JSONArray iconArr=new JSONArray();
			model.accumulate("url","");
			iconArr.element("lock.png");
			model.accumulate("icons",iconArr);
		}
		docArr.element(model);
	}
	viewObj.accumulate("docs",docArr);
	pageContext.setAttribute("viewObj",viewObj.toString());
%>
${viewObj}
