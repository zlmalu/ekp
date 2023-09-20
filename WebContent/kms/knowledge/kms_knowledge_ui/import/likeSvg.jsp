<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="/sys/ui/jsp/common.jsp" %>
<c:set var="svgTitle" value="${param.svgTitle}"/>
<c:set var="svgStyle" value="${param.svgStyle}"/>
<c:set var="svgColor" value="${param.svgColor}"/>
<c:set var="iconSize" value="${param.iconSize}"/>

<span class="svg_like_box" title="${ svgTitle }">
<svg width="${ iconSize }px" height="${ iconSize }px" style="${ svgStyle }" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="控件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon整合" transform="translate(-43.000000, -95.000000)">
            <g id="通用/操作类-点赞" transform="translate(43.000000, 95.000000)">
                <rect id="矩形" x="0" y="0" width="14" height="14"></rect>
                <path d="M9.26524626,5.51114164 L9.19406099,5.78516166 L12.1291877,5.78394775 C12.2689276,5.78202584 12.8325451,5.81267864 12.907073,6.42612593 L12.9150733,6.57608221 L12.8950808,6.83381912 C12.8404052,7.34227166 12.6373243,8.64293423 11.8830238,11.2904293 L11.7061642,11.901157 C11.7061642,11.901157 11.3798982,12.9518844 10.9624493,13.0919814 L10.871686,13.1073492 L5.98464541,13.1073492 C5.66670071,13.1073492 4.88903915,12.9074289 4.78676403,12.3626959 L4.77559914,12.2406368 L4.77559914,5.78516166 L4.89308965,5.69308811 C5.3773798,5.3007337 7.19346783,3.69787951 7.19346783,1.72500245 C7.25768593,1.61306517 7.09578169,0.974512922 7.82872218,0.899776454 L7.97690865,0.892636801 C7.97690865,0.892636801 10.2581928,1.11154858 9.32897129,5.24213899 L9.26524626,5.51114164 Z M1.49317263,5.78730025 L3.44915695,5.78742139 L3.51603717,5.79379765 C3.64039909,5.81271889 3.87992268,5.88657029 3.92751015,6.17437601 L3.93584697,6.28101347 L3.93558275,12.8408943 L3.92417542,12.9025521 C3.903294,12.9716645 3.84508307,13.0714652 3.6828582,13.09966 L3.58777649,13.1073352 L1.89240543,13.1070239 L1.81477911,13.0966477 C1.70873367,13.0744506 1.53874519,13.0061518 1.49664278,12.7960016 L1.48697482,12.6929502 L1.08474754,6.18236635 L1.08872049,6.14051039 C1.10174051,6.05044679 1.15723204,5.84267349 1.3930003,5.79650164 L1.49317263,5.78730025 Z M8.176,2.09 L8.1647252,2.22698592 C8.05072983,3.22138125 7.60352488,4.15795625 6.92842835,5.02967594 L6.75496742,5.24625064 C6.47036974,5.59018299 6.18617032,5.88413951 5.92761885,6.12334505 L5.775,6.26 L5.775,12.053 L5.79094362,12.0600124 C5.84220413,12.079052 5.89710699,12.0937441 5.93741327,12.1014232 L5.98464541,12.1073492 L10.54,12.107 L10.567394,12.0562019 C10.6348458,11.9216136 10.6914719,11.7793805 10.7255979,11.6824206 L10.7467912,11.6190163 L10.9581466,10.8868602 C11.3249591,9.59058275 11.5791923,8.54587128 11.7393164,7.72827588 L11.8342207,7.20647657 L11.896,6.785 L7.8872883,6.78516166 L8.22881782,5.52380824 C8.73558478,3.65219183 8.62210372,2.62678132 8.2252819,2.14527904 L8.176,2.09 Z M2.935,6.787 L2.123,6.787 L2.45,12.107 L2.935,12.107 L2.935,6.787 Z"
                 id="形状" fill="${ svgColor? svgColor : '#333333' }" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>
</span>