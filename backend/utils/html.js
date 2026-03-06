const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const toPlainObject = (value) => {
  if (value && typeof value.toObject === 'function') {
    return value.toObject({ virtuals: true });
  }

  return value;
};

const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char]);

const formatUserContent = (value = '') => escapeHtml(value).replace(/\r?\n/g, '<br />');

const sanitizeDiscussionResponse = (discussion) => {
  if (!discussion) {
    return discussion;
  }

  const plainDiscussion = toPlainObject(discussion);

  return {
    ...plainDiscussion,
    content: formatUserContent(plainDiscussion.content || ''),
    replies: Array.isArray(plainDiscussion.replies)
      ? plainDiscussion.replies.map(sanitizeDiscussionResponse)
      : plainDiscussion.replies,
  };
};

const sanitizeTopicResponse = (topic) => {
  if (!topic) {
    return topic;
  }

  const plainTopic = toPlainObject(topic);

  return {
    ...plainTopic,
    content: formatUserContent(plainTopic.content || ''),
  };
};

module.exports = {
  formatUserContent,
  sanitizeDiscussionResponse,
  sanitizeTopicResponse,
};
