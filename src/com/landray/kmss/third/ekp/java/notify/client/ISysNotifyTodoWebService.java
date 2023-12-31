package com.landray.kmss.third.ekp.java.notify.client;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 2.4.7
 * 2015-02-27T17:15:47.677+08:00
 * Generated source version: 2.4.7
 * 
 */
@WebService(targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", name = "ISysNotifyTodoWebService")
@XmlSeeAlso({ObjectFactory.class})
public interface ISysNotifyTodoWebService {

    @WebMethod
    @ResponseWrapper(localName = "getTodoResponse", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.GetTodoResponse")
    @RequestWrapper(localName = "getTodo", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.GetTodo")
    @WebResult(name = "return", targetNamespace = "")
    public com.landray.kmss.third.ekp.java.notify.client.NotifyTodoAppResult getTodo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.notify.client.NotifyTodoGetContext arg0
    ) throws Exception_Exception;

    @WebMethod
    @ResponseWrapper(localName = "setTodoDoneResponse", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.SetTodoDoneResponse")
    @RequestWrapper(localName = "setTodoDone", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.SetTodoDone")
    @WebResult(name = "return", targetNamespace = "")
    public com.landray.kmss.third.ekp.java.notify.client.NotifyTodoAppResult setTodoDone(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.notify.client.NotifyTodoRemoveContext arg0
    ) throws Exception_Exception;

    @WebMethod
    @ResponseWrapper(localName = "updateTodoResponse", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.UpdateTodoResponse")
    @RequestWrapper(localName = "updateTodo", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.UpdateTodo")
    @WebResult(name = "return", targetNamespace = "")
    public com.landray.kmss.third.ekp.java.notify.client.NotifyTodoAppResult updateTodo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.notify.client.NotifyTodoUpdateContext arg0
    ) throws Exception_Exception;

    @WebMethod
    @ResponseWrapper(localName = "sendTodoResponse", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.SendTodoResponse")
    @RequestWrapper(localName = "sendTodo", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.SendTodo")
    @WebResult(name = "return", targetNamespace = "")
    public com.landray.kmss.third.ekp.java.notify.client.NotifyTodoAppResult sendTodo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.notify.client.NotifyTodoSendContext arg0
    ) throws Exception_Exception;

    @WebMethod
    @ResponseWrapper(localName = "deleteTodoResponse", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.DeleteTodoResponse")
    @RequestWrapper(localName = "deleteTodo", targetNamespace = "http://webservice.notify.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.notify.client.DeleteTodo")
    @WebResult(name = "return", targetNamespace = "")
    public com.landray.kmss.third.ekp.java.notify.client.NotifyTodoAppResult deleteTodo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.notify.client.NotifyTodoRemoveContext arg0
    ) throws Exception_Exception;
}
