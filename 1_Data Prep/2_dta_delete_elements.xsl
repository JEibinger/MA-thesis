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
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="t:w">
        <xsl:copy>
            <xsl:apply-templates select="node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="t:xlit">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:moot">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:mlatin">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:a">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:s">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="t:add">
        <xsl:apply-templates/>
    </xsl:template>
</xsl:stylesheet>