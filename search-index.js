var searchIndex = {};
searchIndex['bchannel'] = {"items":[[0,"","bchannel",""],[1,"Sender","","A better Sender struct.  A sender can send values of type `T`\nand can signal an error of type `E`.  (It can only signal one error)."],[1,"Receiver","","A better Receiver struct.  A receiver can receive values of type `T`\nand can contain at most one error of type `E`."],[1,"ReceiverIterator","","An iterator wrapper for receivers."],[3,"channel","","Creates a linked channel between a Sender and Receiver."],[10,"send","","Sends a value through the channel asynchronously.\nIf the value can not be sent (channel closed) the value\nis returned back in the Result.",0],[10,"send_all","","Sends all the value in an iterator through the\nchannel.  If any of the sends fails, that value and the\nrest of the iterator are returned.",0],[10,"close","","Closes the channel.  Shortcut for std::mem::drop(this).",0],[10,"error","","Closes the channel with an error.  This is by definition\nthe last value that can be sent through the channe.;",0],[10,"is_closed","","Returns true if it is known that the channel is closed.\nThe channel might be closed, but if you haven't tried to write\nto it yet, then this method will return the wrong value.",0],[10,"clone","","",0],[10,"recv","","If there is a value in the channel, this function returns the\nfirst value in the channel.",1],[10,"recv_block","","This method blocks until a value is in the channel\nand then it returns that value.  If the channel is\nclosed, None is returned.",1],[10,"has_error","","Returns true if this channel has been closed due to\nan error.",1],[10,"take_error","","Returns the error if one exists.\nThis moves the value out of the receiver.",1],[10,"is_closed","","Returns true if this channel has been closed for any reason:\n* Closed naturally\n* Closed due to an error",1],[10,"iter","","Returns an iterator that will run through all values cached in\nthe receiver.  The returned iterator will never block.",1],[10,"blocking_iter","","Returns an iterator that will run through all values in the\nchannel until the channel closes or an error is sent.\nThis function blocks when it runs out of cached values.",1],[10,"into_iter","","Wraps the receiver into an iterator that will run until\nthe cached values are exhausted or the channel closes.",1],[10,"into_blocking_iter","","Wraps the receiver into an iterator that will run until\nthe channel closes.",1],[10,"next","","",2]],"paths":[[1,"Sender"],[1,"Receiver"],[1,"ReceiverIterator"]]};
initSearch(searchIndex);