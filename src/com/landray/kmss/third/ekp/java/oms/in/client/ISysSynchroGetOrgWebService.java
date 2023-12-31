package com.landray.kmss.third.ekp.java.oms.in.client;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2021-02-01T09:44:31.321+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebService(targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", name = "ISysSynchroGetOrgWebService")
@XmlSeeAlso({ObjectFactory.class})
public interface ISysSynchroGetOrgWebService {

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getUpdatedElementsByToken", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElementsByToken")
    @WebMethod
    @ResponseWrapper(localName = "getUpdatedElementsByTokenResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElementsByTokenResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgTokenResult getUpdatedElementsByToken(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoTokenContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleConfCateInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfCateInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleConfCateInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfCateInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleConfCateInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleConfInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleConfInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleConfInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getUpdatedElements", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElements")
    @WebMethod
    @ResponseWrapper(localName = "getUpdatedElementsResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElementsResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getUpdatedElements(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleConfMemberInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfMemberInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleConfMemberInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleConfMemberInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleConfMemberInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getElementsBaseInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetElementsBaseInfo")
    @WebMethod
    @ResponseWrapper(localName = "getElementsBaseInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetElementsBaseInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getElementsBaseInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgBaseInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getElementsBaseInfoV2", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetElementsBaseInfoV2")
    @WebMethod
    @ResponseWrapper(localName = "getElementsBaseInfoV2Response", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetElementsBaseInfoV2Response")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getElementsBaseInfoV2(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgBaseInfoContextV2 arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleLineDefaultRoleInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleLineDefaultRoleInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleLineDefaultRoleInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleLineDefaultRoleInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleLineDefaultRoleInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getRoleLineInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleLineInfo")
    @WebMethod
    @ResponseWrapper(localName = "getRoleLineInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetRoleLineInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getRoleLineInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getUpdatedElementsV2", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElementsV2")
    @WebMethod
    @ResponseWrapper(localName = "getUpdatedElementsV2Response", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetUpdatedElementsV2Response")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getUpdatedElementsV2(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContextV2 arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getOrgGroupCateInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetOrgGroupCateInfo")
    @WebMethod
    @ResponseWrapper(localName = "getOrgGroupCateInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetOrgGroupCateInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getOrgGroupCateInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "getOrgStaffingLevelInfo", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetOrgStaffingLevelInfo")
    @WebMethod
    @ResponseWrapper(localName = "getOrgStaffingLevelInfoResponse", targetNamespace = "http://out.webservice.organization.sys.kmss.landray.com/", className = "com.landray.kmss.third.ekp.java.oms.in.client.GetOrgStaffingLevelInfoResponse")
    public com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroOrgResult getOrgStaffingLevelInfo(
        @WebParam(name = "arg0", targetNamespace = "")
        com.landray.kmss.third.ekp.java.oms.in.client.SysSynchroGetOrgInfoContext arg0
    ) throws Exception_Exception;
}
