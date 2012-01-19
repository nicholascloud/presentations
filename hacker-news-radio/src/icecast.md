# Icecast

---

# About

Icecast is a streaming media server which currently supports Ogg Vorbis and MP3 audio streams. It can be used to create an Internet radio station or a privately running jukebox and many things in between. It is very versatile in that new formats can be added relatively easily and supports open standards for commuincation and interaction.


There are two major parts to most streaming media servers: the component providing the content (what we call source clients) and the component which is responsible for serving that content to listeners (this is the function of icecast).

---

# Concepts

A **source client** is an external program which is responsible for
sending content data to icecast. Some source clients that support
icecast2 are Oddcast, ices2, ices0.3, and DarkIce.

The **slave server** in a relay configuration is the server that is pulling the data from the master server. It acts as a listening client to the master server.

The **master server** in a relay configuration is the server that has
the stream that is being relayed.

A **mountpoint** is a resource on the icecast server that represents a single broadcast stream. Mountpoints are named similar to files (/mystream.ogg, /mymp3stream). When listeners connect to icecast2, they must specify the mountpoint in the request (i.e. http://192.168.1.10:8000/mystream.ogg). Additionally, source clients must specify a mountpoint when they connect as well. Statistics are kept track of by mountpoint. Mountpoints are a fundamental aspect of icecast2 and how it is organized.


---

# Mountpoints

Each icecast server can house multiple broadcasts (or mountpoints)
each containing a separate stream of content. A 'mountpoint' is a
unique name on your server identifying a particular stream - it looks
like a filename, such as '/stream.ogg'. A listener can only listen to
a single mountpoint at a time. This means you can have a single
icecast server contain either multiple broadcasts with different
content, or possibly the same broadcast but with streams of different
bitrates or qualities. In this case each broadcast or stream is a
separate mountpoint.

* Static
* Dynamic

---

# Configuration

* Concurrent Clients
* Sources
* Timeouts
* Authentication
* Relay
* etc

--- 

# Admin interface

Through this interface the user can manipulate many server features. From it you can gather statistics, move listeners from mountpoint to mountpoint, disconnect connected sources, disconnect connected listeners, and many other activities.

# Relying

Relaying is the process by which one server mirrors one or more streams from a remote server. The servers need not be of the same type (i.e. icecast can relay from Shoutcast). Relaying is used primarily for large broadcasts that need to distribute listening clients across multiple physical machines.

**Type of Relays**

There are two types of relays that icecast supports. The first type is when both master and slave servers are icecast2 servers. In this case, a "master-slave" relay can be setup such that all that needs to be done is configure the slave server with the connection information (serverip:port) of the master server and the slave will mirror all mountpoints on the master server. The slave will also periodically check the master server to see if any new mountpoints have attached and if so will relay those as well. The second type of relay is a "single-broadcast" relay. In this case, the slave server is configured with a serverip+port+mount and only the mountpoint specified is relayed. In order to relay a broadcast stream on a Shoutcast server, you must use the "single-broadcast" relay and specify a mountpoint of "/".


---

# Yellow Pages

A YP (Yellow Pages) directory is a listing of broadcast streams. Icecast2 has it own YP directory located at http://dir.xiph.org. Currently icecast2 can only be listed in an icecast2-supported YP directory. This means that you cannot list your stream in the Shoutcast YP directory.

In the icecast2 configuration file are all the currently available YP
directory servers. Listing your stream in a YP is a combination of
settings in the icecast configuration file and also in your source
client.

---

# Listener Authentication

Listener authentication is a feature of icecast which allows you to secure a certain mountpoint such that in order to listen, a listener must pass some verification test. With this feature, a simple pay-for-play operation (eg user/pass), or some filtering based on the listener connection can be performed. This section will show you the basics of setting up and maintaining this component.

To define listener authentication, a group of tags are specified in
the <mount> group relating to the mountpoint. This means that
authentication can apply to listeners of source clients or relays.

---

# Demo

---

# Wrap-up

---

# Questions



