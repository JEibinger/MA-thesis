<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:x="urn:schemas-microsoft-com:office:excel"
    xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:t="http://www.tei-c.org/ns/1.0">
    
    <xsl:output omit-xml-declaration="yes"/>
    
    <xsl:template match="node()|@*">
        <xsl:copy>
            <xsl:apply-templates select="node()|@*"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="t:g">
        <xsl:apply-templates/>
    </xsl:template>    
    
    <xsl:template match="t:metamark">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:anchor"/>
    
    <xsl:template match="t:unclear">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:hi">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:del">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:sic">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:expan">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:abbr">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:ex">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:am">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:foreign">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:seg">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:supplied">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:add">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:note"/>
    
    <xsl:template match="t:handShift"/>
    
    <xsl:template match="t:mod">
        <xsl:apply-templates/>
    </xsl:template>
        
    <xsl:template match="t:listTranspose"/>
    <xsl:template match="t:transpose"/>
    <xsl:template match="t:ptr"/>
    
</xsl:stylesheet>