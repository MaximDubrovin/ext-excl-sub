
Posts = new Meteor.Collection('posts');

if (Meteor.isServer)
{
	if (!Posts.find({}).count())
	{
		Posts.insert(
			{
				title: {
					published: 'published title',
					unpublished: 'unpublished title'
				}
			}
		)
	}
}


