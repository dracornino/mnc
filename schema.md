yarn run v1.12.3
$ /home/dracornino/repositories/mnc/node_modules/.bin/graphql-markdown http://localhost:14801/graphql
# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [ResultSet](#resultset)
    * [SearchResult](#searchresult)
  * [Enums](#enums)
    * [MediaType](#mediatype)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Int](#int)
    * [String](#string)

</details>

## Query (Queries)
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

Do your <strong> searches in one place</strong>

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">criteria</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Foo bar

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#mediatype">MediaType</a>!</td>
<td></td>
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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRecords</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>criteria</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resultSet</strong></td>
<td valign="top">[<a href="#resultset">ResultSet</a>]</td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### MediaType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>SONG</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MOVIE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TV_SHOW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PERSONAS</strong></td>
<td></td>
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
