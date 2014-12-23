
Meteor.publish('posts_no_fields_exclusion_or_inclusion', function()
{
	return Posts.find({})
});

Meteor.publish('posts_unpublished_fields_explicitly_excluded', function()
{
	return Posts.find(
		{},
		{
			fields: {
				'title.unpublished': 0
			}
		}
	)
});

Meteor.publish('posts_unpublished_fields_explicitly_included', function()
{
	return Posts.find(
		{},
		{
			fields: {
				'title.unpublished': 1
			}
		}
	)
});