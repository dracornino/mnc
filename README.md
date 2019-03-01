# API Test

## Environment

1. OS Ubuntu 18.04
2. Docker 18.09.3
3. Port 14801

## Install

1. To install this API, you must run this command in a shell console:

```
git clone https://github.com/dracornino/mnc.git
cd mnc
```

2. You need Docker to run this API. If you have Docker installed already, you can go to step 3 if not you can use the following instructions to install Docker in an Ubuntu fresh environment, using a custom script that we created:

```
chmod a+x ./bin/install-docker-ubuntu-18.04.sh
sudo bash ./bin/install-docker-ubuntu-18.04.sh
```

For any other Linux based distro you can refer to this link to know how to install Docker.
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04

3. With Docker installed, you must build an run the image with the API environment; using the following custom scripts (You could check the scripts to add any extra configuration supported by the project Dockerfile or Docker):

```
chmod a+x ./bin/run-mnc-api.sh
sudo sh ./bin/run-mnc-api.sh
```

4. To test if the deployment was successful you can run the following script in the opened console:

```
curl -X POST \
  http://localhost:14801/graphql \
  -H 'Content-Type: application/json' \
  -d '{
	"query":"query($criteria:String!){search(criteria:$criteria){criteria,timestamp,totalRecords,resultSet{name,source,type,url}}}",
	"variables":{
		"criteria":"The Island of Lost Dreams"
	}
}'
```

The result must be:

```
{"data":{"search":{"criteria":"The Island of Lost Dreams","timestamp":1551460452,"totalRecords":3,"resultSet":[{"name":"The Island of Lost Dreams","source":"iTunes","type":"SONG","url":"https://itunes.apple.com/us/album/the-island-of-lost-dreams/611043863?i=611043936&uo=4"},{"name":"Island of Lost Dreams","source":"iTunes","type":"SONG","url":"https://itunes.apple.com/us/album/island-of-lost-dreams/334802976?i=334803089&uo=4"},{"name":"Spy Kids 2: The Island of Lost Dreams","source":"iTunes","type":"MOVIE","url":"https://itunes.apple.com/us/movie/spy-kids-2-the-island-of-lost-dreams/id432484383?uo=4"}]}}}
```

This API was designed using [GraphQL](https://graphql.org/)

The current API has a GraphQL query that can be called via HTTP
or via some [GraphQL Client](https://graphql.org/code/#graphql-clients)

An easy way to test this API is by going to [this link](<http://localhost:14801/graphql?query=query(%24criteria%3AString!)%0A%7B%0A%20%20search(criteria%3A%20%24criteria)%20%7B%0A%20%20%20%20criteria%0A%20%20%20%20timestamp%0A%20%20%20%20totalRecords%0A%20%20%20%20resultSet%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20source%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22criteria%22%3A%20%22The%20Island%20of%20Lost%20Dreams%22%0A%7D>) that has a query playground configured for you.

# Reference Table

<details>
  <summary><strong>Table of Contents</strong></summary>

-   [Query](#query)
-   [Objects](#objects)
    -   [ResultSet](#resultset)
    -   [SearchResult](#searchresult)
-   [Enums](#enums)
    -   [MediaSourceType](#mediasourcetype)
    -   [MediaType](#mediatype)
-   [Scalars](#scalars)
    -   [Boolean](#boolean)
    -   [Int](#int)
    -   [String](#string)

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
