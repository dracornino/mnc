yarn run v1.12.3
$ /home/dracornino/repositories/mnc-test/mnc/node_modules/.bin/graphql-markdown http://localhost:14801/graphql
# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [ResultSet](#resultset)
    * [SearchResult](#searchresult)
  * [Enums](#enums)
    * [MediaSourceType](#mediasourcetype)
    * [MediaType](#mediatype)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Int](#int)
    * [String](#string)

</details>

## Query (Queries)
This API uses a fuzzy algorithm to sort the results by score with respect to the searched criteria 

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#searchresult">SearchResult</a></td>
<td>

This query allows you to search for songs and movies in iTunes, shows on TVMaze and people in CRC Industries 

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">criteria</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The value you want to look for in different sources

</td>
</tr>
</tbody>
</table>

## Objects

### ResultSet

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the song, movie, show or person found

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#mediasourcetype">MediaSourceType</a>!</td>
<td>

The source of the song, movie, show or persona found

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#mediatype">MediaType</a>!</td>
<td>

Represents the type of data found

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

More info about item found

</td>
</tr>
</tbody>
</table>

### SearchResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The timestamp in unix format

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRecords</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total number of matches found in all sources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>criteria</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The word used to search the sources

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resultSet</strong></td>
<td valign="top">[<a href="#resultset">ResultSet</a>]</td>
<td>

The list of all matching records

</td>
</tr>
</tbody>
</table>

## Enums

### MediaSourceType

Represents the source of the query

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>iTunes</strong></td>
<td>

https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

</td>
</tr>
<tr>
<td valign="top"><strong>TVMaze</strong></td>
<td>

http://www.tvmaze.com/api

</td>
</tr>
<tr>
<td valign="top"><strong>CRCIndustries</strong></td>
<td>

http://www.crcind.com/csp/samples/SOAP.Demo.cls

</td>
</tr>
</tbody>
</table>

### MediaType

Represents the type of data obtained

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>SONG</strong></td>
<td>

A song found in iTunes

</td>
</tr>
<tr>
<td valign="top"><strong>MOVIE</strong></td>
<td>

A movie found in iTunes

</td>
</tr>
<tr>
<td valign="top"><strong>TV_SHOW</strong></td>
<td>

A tv-show found in TVMaze

</td>
</tr>
<tr>
<td valign="top"><strong>PERSONAS</strong></td>
<td>

A persona found in web service

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

Done in 0.20s.
