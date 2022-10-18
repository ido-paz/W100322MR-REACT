# Users manager web API enables managing users
* The API should contains:
1. Getting all users using 'get' request to http[s]://[serverUrl] 
2. Getting user by id using 'get' request to http[s]://[serverUrl]/[id]
3. Getting users by email using 'get' request to http[s]://[serverUrl]/contains/[email]
4. Adding new user using 'post' request and sending user data as JSON to http[s]://[serverUrl]
5. Updating user using 'put' request and sending user data as JSON to http[s]://[serverUrl]
5. Deleting user using 'delete' request to http[s]://[serverUrl]/[id]

* start the service by running UsersManager_WebAPI.exe

* user contains :
<pre>
{
	id:[number]
	email:[string]
	password:[string]
}
</pre>