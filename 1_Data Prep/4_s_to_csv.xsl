<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:t="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="xs xsl" version="2.0">
    <xsl:strip-space elements="*" />
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        <xsl:text>folio,line,type,word,pre_text,after_text&#10;</xsl:text>
        <xsl:apply-templates select="//t:g[@ref='#snorm']"/>
    </xsl:template>
    
    <xsl:template match="t:g[@ref='#snorm']">
        <xsl:value-of select="./preceding::t:pb[1]/@n"/><xsl:text>,</xsl:text><!-- folio-Nummer vor jedem snorm-->
        <xsl:value-of select="./preceding::t:lb[1]/@n"/><xsl:text>,</xsl:text><!-- Zeilen-Nummer vor jedem snorm-->
        <xsl:value-of select="./@ref"/><xsl:text>,</xsl:text><!-- type-->
        <xsl:value-of select="./parent::node()"/><xsl:text>,</xsl:text><!-- word -->
        <xsl:apply-templates mode="img" select="./preceding-sibling::node()"/><xsl:text>,</xsl:text><!-- pre-text -->
        <xsl:apply-templates mode="img" select="./following-sibling::node()"/><xsl:text>&#10;</xsl:text><!-- after-text -->
    </xsl:template>
    
    <xsl:template match="t:g[@ref='#snorm']" mode="img">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>