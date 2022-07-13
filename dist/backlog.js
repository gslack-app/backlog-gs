(() => {
    var e = {
        "./src/backlog.ts": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => Backlog
            });
            var r = s("./src/request.ts");
            class Backlog extends r.default {
                constructor(e) {
                    super(e);
                }
                getSpace() {
                    return this.get("space");
                }
                getSpaceActivities(e) {
                    return this.get("space/activities", e);
                }
                getSpaceIcon() {
                    return this.download("space/image");
                }
                getSpaceNotification() {
                    return this.get("space/notification");
                }
                putSpaceNotification(e) {
                    return this.put("space/notification", e);
                }
                getSpaceDiskUsage() {
                    return this.get("space/diskUsage");
                }
                postSpaceAttachment(e) {
                    return this.upload("space/attachment", e);
                }
                getUsers() {
                    return this.get("users");
                }
                getUser(e) {
                    return this.get(`users/${e}`);
                }
                postUser(e) {
                    return this.post("users", e);
                }
                patchUser(e, t) {
                    return this.patch(`users/${e}`, t);
                }
                deleteUser(e) {
                    return this.delete(`users/${e}`);
                }
                getMyself() {
                    return this.get("users/myself");
                }
                getUserIcon(e) {
                    return this.download(`users/${e}/icon`);
                }
                getUserActivities(e, t) {
                    return this.get(`users/${e}/activities`, t);
                }
                getUserStars(e, t) {
                    return this.get(`users/${e}/stars`, t);
                }
                getUserStarsCount(e, t) {
                    return this.get(`users/${e}/stars/count`, t);
                }
                getRecentlyViewedIssues(e) {
                    return this.get("users/myself/recentlyViewedIssues", e);
                }
                getRecentlyViewedProjects(e) {
                    return this.get("users/myself/recentlyViewedProjects", e);
                }
                getRecentlyViewedWikis(e) {
                    return this.get("users/myself/recentlyViewedWikis", e);
                }
                getGroups(e) {
                    return this.get("groups", e);
                }
                postGroups(e) {
                    return this.post("groups", e);
                }
                getGroup(e) {
                    return this.get(`groups/${e}`);
                }
                patchGroup(e, t) {
                    return this.patch(`groups/${e}`, t);
                }
                deleteGroup(e) {
                    return this.delete(`groups/${e}`);
                }
                getStatuses() {
                    return this.get("statuses");
                }
                getProjectStatuses(e) {
                    return this.get(`projects/${e}/statuses`);
                }
                getResolutions() {
                    return this.get("resolutions");
                }
                getPriorities() {
                    return this.get("priorities");
                }
                getProjects(e) {
                    return this.get("projects", e);
                }
                postProject(e) {
                    return this.post("projects", e);
                }
                getProject(e) {
                    return this.get(`projects/${e}`);
                }
                patchProject(e, t) {
                    return this.patch(`projects/${e}`, t);
                }
                deleteProject(e) {
                    return this.delete(`projects/${e}`);
                }
                getProjectIcon(e) {
                    return this.download(`projects/${e}/image`);
                }
                getProjectActivities(e, t) {
                    return this.get(`projects/${e}/activities`, t);
                }
                postProjectUser(e, t) {
                    return this.post(`projects/${e}/users`, {
                        userId: t
                    });
                }
                getProjectUsers(e) {
                    return this.get(`projects/${e}/users`);
                }
                deleteProjectUsers(e, t) {
                    return this.delete(`projects/${e}/users`, t);
                }
                postProjectAdministrators(e, t) {
                    return this.post(`projects/${e}/administrators`, t);
                }
                getProjectAdministrators(e) {
                    return this.get(`projects/${e}/administrators`);
                }
                deleteProjectAdministrators(e, t) {
                    return this.delete(`projects/${e}/administrators`, t);
                }
                postProjectStatus(e, t) {
                    return this.post(`projects/${e}/statuses`, t);
                }
                patchProjectStatus(e, t, s) {
                    return this.patch(`projects/${e}/statuses/${t}`, s);
                }
                deleteProjectStatus(e, t, s) {
                    return this.delete(`projects/${e}/statuses/${t}`, {
                        substituteStatusId: s
                    });
                }
                patchProjectStatusOrder(e, t) {
                    return this.patch(`projects/${e}/statuses/updateDisplayOrder`, {
                        statusId: t
                    });
                }
                getIssueTypes(e) {
                    return this.get(`projects/${e}/issueTypes`);
                }
                postIssueType(e, t) {
                    return this.post(`projects/${e}/issueTypes`, t);
                }
                patchIssueType(e, t, s) {
                    return this.patch(`projects/${e}/issueTypes/${t}`, s);
                }
                deleteIssueType(e, t, s) {
                    return this.delete(`projects/${e}/issueTypes/${t}`, s);
                }
                getCategories(e) {
                    return this.get(`projects/${e}/categories`);
                }
                postCategories(e, t) {
                    return this.post(`projects/${e}/categories`, t);
                }
                patchCategories(e, t, s) {
                    return this.patch(`projects/${e}/categories/${t}`, s);
                }
                deleteCategories(e, t) {
                    return this.delete(`projects/${e}/categories/${t}`);
                }
                getVersions(e) {
                    return this.get(`projects/${e}/versions`);
                }
                postVersions(e, t) {
                    return this.post(`projects/${e}/versions`, t);
                }
                patchVersions(e, t, s) {
                    return this.patch(`projects/${e}/versions/${t}`, s);
                }
                deleteVersions(e, t) {
                    return this.delete(`projects/${e}/versions/${t}`);
                }
                getCustomFields(e) {
                    return this.get(`projects/${e}/customFields`);
                }
                postCustomField(e, t) {
                    return this.post(`projects/${e}/customFields`, t);
                }
                patchCustomField(e, t, s) {
                    return this.patch(`projects/${e}/customFields/${t}`, s);
                }
                deleteCustomField(e, t) {
                    return this.delete(`projects/${e}/customFields/${t}`);
                }
                postCustomFieldItem(e, t, s) {
                    return this.post(`projects/${e}/customFields/${t}/items`, s);
                }
                patchCustomFieldItem(e, t, s, r) {
                    return this.patch(`projects/${e}/customFields/${t}/items/${s}`, r);
                }
                deleteCustomFieldItem(e, t, s) {
                    return this.delete(`projects/${e}/customFields/${t}/items/${s}`);
                }
                getSharedFiles(e, t, s) {
                    return this.get(`projects/${e}/files/metadata/${t}`, s);
                }
                getSharedFile(e, t) {
                    return this.download(`projects/${e}/files/${t}`);
                }
                getProjectsDiskUsage(e) {
                    return this.get(`projects/${e}/diskUsage`);
                }
                getWebhooks(e) {
                    return this.get(`projects/${e}/webhooks`);
                }
                postWebhook(e, t) {
                    return this.post(`projects/${e}/webhooks`, t);
                }
                getWebhook(e, t) {
                    return this.get(`projects/${e}/webhooks/${t}`);
                }
                patchWebhook(e, t, s) {
                    return this.patch(`projects/${e}/webhooks/${t}`, s);
                }
                deleteWebhook(e, t) {
                    return this.delete(`projects/${e}/webhooks/${t}`);
                }
                getIssues(e) {
                    return this.get("issues", e);
                }
                getIssuesCount(e) {
                    return this.get("issues/count", e);
                }
                postIssue(e) {
                    return this.post("issues", e);
                }
                patchIssue(e, t) {
                    return this.patch(`issues/${e}`, t);
                }
                getIssue(e) {
                    return this.get(`issues/${e}`);
                }
                deleteIssuesCount(e) {
                    return this.delete(`issues/${e}`);
                }
                getIssueComments(e, t) {
                    return this.get(`issues/${e}/comments`, t);
                }
                postIssueComments(e, t) {
                    return this.post(`issues/${e}/comments`, t);
                }
                getIssueCommentsCount(e) {
                    return this.get(`issues/${e}/comments/count`);
                }
                getIssueComment(e, t) {
                    return this.get(`issues/${e}/comments/${t}`);
                }
                deleteIssueComment(e, t) {
                    return this.delete(`issues/${e}/comments/${t}`);
                }
                patchIssueComment(e, t, s) {
                    return this.patch(`issues/${e}/comments/${t}`, s);
                }
                getIssueCommentNotifications(e, t) {
                    return this.get(`issues/${e}/comments/${t}/notifications`);
                }
                postIssueCommentNotifications(e, t, s) {
                    return this.post(`issues/${e}/comments/${t}/notifications`, s);
                }
                getIssueAttachments(e) {
                    return this.get(`issues/${e}/attachments`);
                }
                getIssueAttachment(e, t) {
                    return this.download(`issues/${e}/attachments/${t}`);
                }
                deleteIssueAttachment(e, t) {
                    return this.delete(`issues/${e}/attachments/${t}`);
                }
                getIssueParticipants(e) {
                    return this.get(`issues/${e}/participants`);
                }
                getIssueSharedFiles(e) {
                    return this.get(`issues/${e}/sharedFiles`);
                }
                linkIssueSharedFiles(e, t) {
                    return this.post(`issues/${e}/sharedFiles`, t);
                }
                unlinkIssueSharedFile(e, t) {
                    return this.delete(`issues/${e}/sharedFiles/${t}`);
                }
                getWikis(e) {
                    return this.get("wikis", e);
                }
                getWikisCount(e) {
                    return this.get("wikis/count", {
                        projectIdOrKey: e
                    });
                }
                getWikisTags(e) {
                    return this.get("wikis/tags", {
                        projectIdOrKey: e
                    });
                }
                postWiki(e) {
                    return this.post("wikis", e);
                }
                getWiki(e) {
                    return this.get(`wikis/${e}`);
                }
                patchWiki(e, t) {
                    return this.patch(`wikis/${e}`, t);
                }
                deleteWiki(e, t) {
                    return this.delete(`wikis/${e}`, {
                        mailNotify: t
                    });
                }
                getWikisAttachments(e) {
                    return this.get(`wikis/${e}/attachments`);
                }
                postWikisAttachments(e, t) {
                    return this.post(`wikis/${e}/attachments`, {
                        attachmentId: t
                    });
                }
                getWikiAttachment(e, t) {
                    return this.download(`wikis/${e}/attachments/${t}`);
                }
                deleteWikisAttachments(e, t) {
                    return this.delete(`wikis/${e}/attachments/${t}`);
                }
                getWikisSharedFiles(e) {
                    return this.get(`wikis/${e}/sharedFiles`);
                }
                linkWikisSharedFiles(e, t) {
                    return this.post(`wikis/${e}/sharedFiles`, {
                        fileId: t
                    });
                }
                unlinkWikisSharedFiles(e, t) {
                    return this.delete(`wikis/${e}/sharedFiles/${t}`);
                }
                getWikisHistory(e, t) {
                    return this.get(`wikis/${e}/history`, t);
                }
                getWikisStars(e) {
                    return this.get(`wikis/${e}/stars`);
                }
                postStar(e) {
                    return this.post("stars", e);
                }
                getNotifications(e) {
                    return this.get("notifications", e);
                }
                getNotificationsCount(e) {
                    return this.get("notifications/count", e);
                }
                resetNotificationsMarkAsRead() {
                    return this.post("notifications/markAsRead");
                }
                markAsReadNotification(e) {
                    return this.post(`notifications/${e}/markAsRead`);
                }
                getGitRepositories(e) {
                    return this.get(`projects/${e}/git/repositories`);
                }
                getGitRepository(e, t) {
                    return this.get(`projects/${e}/git/repositories/${t}`);
                }
                getPullRequests(e, t, s) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests`, s);
                }
                getPullRequestsCount(e, t, s) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/count`, s);
                }
                postPullRequest(e, t, s) {
                    return this.post(`projects/${e}/git/repositories/${t}/pullRequests`, s);
                }
                getPullRequest(e, t, s) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/${s}`);
                }
                patchPullRequest(e, t, s, r) {
                    return this.patch(`projects/${e}/git/repositories/${t}/pullRequests/${s}`, r);
                }
                getPullRequestComments(e, t, s, r) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/${s}/comments`, r);
                }
                postPullRequestComments(e, t, s, r) {
                    return this.post(`projects/${e}/git/repositories/${t}/pullRequests/${s}/comments`, r);
                }
                getPullRequestCommentsCount(e, t, s) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/${s}/comments/count`);
                }
                patchPullRequestComments(e, t, s, r, i) {
                    return this.patch(`projects/${e}/git/repositories/${t}/pullRequests/${s}/comments/${r}`, i);
                }
                getPullRequestAttachments(e, t, s) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/${s}/attachments`);
                }
                getPullRequestAttachment(e, t, s, r) {
                    return this.download(`projects/${e}/git/repositories/${t}/pullRequests/${s}/attachments/${r}`);
                }
                deletePullRequestAttachment(e, t, s, r) {
                    return this.get(`projects/${e}/git/repositories/${t}/pullRequests/${s}/attachments/${r}`);
                }
                getWatchingListItems(e) {
                    return this.get(`users/${e}/watchings`);
                }
                getWatchingListCount(e) {
                    return this.get(`users/${e}/watchings/count`);
                }
                getWatchingListItem(e) {
                    return this.get(`watchings/${e}`);
                }
                postWatchingListItem(e) {
                    return this.post("watchings", e);
                }
                patchWatchingListItem(e, t) {
                    return this.patch(`watchings/${e}`, {
                        note: t
                    });
                }
                deletehWatchingListItem(e) {
                    return this.delete(`watchings/${e}`);
                }
                resetWatchingListItemAsRead(e) {
                    return this.post(`watchings/${e}/markAsRead`);
                }
                getProjectGroupList(e) {
                    return this.get(`projects/${e}/groups`);
                }
                postProjectGroup(e, t) {
                    return this.post(`projects/${e}/groups`, t);
                }
                deleteProjectGroup(e) {
                    return this.delete(`projects/${e}/groups`);
                }
                getGroupIcon(e) {
                    return this.download(`groups/${e}/icon`);
                }
                getLicence() {
                    return this.get("space/licence");
                }
                getTeams(e) {
                    return this.get("teams", e);
                }
                postTeam(e) {
                    return this.post("teams", {
                        members: e
                    });
                }
                getTeam(e) {
                    return this.get(`teams/${e}`);
                }
                patchTeam(e, t) {
                    return this.patch(`teams/${e}`, t);
                }
                deleteTeam(e) {
                    return this.delete(`teams/${e}`);
                }
                getTeamIcon(e) {
                    return this.download(`teams/${e}/icon`);
                }
                getProjectTeams(e) {
                    return this.get(`projects/${e}/teams`);
                }
                postProjectTeam(e, t) {
                    return this.post(`projects/${e}/teams`, {
                        teamId: t
                    });
                }
                deleteProjectTeam(e, t) {
                    return this.delete(`projects/${e}/teams`, {
                        teamId: t
                    });
                }
                getRateLimit() {
                    return this.get("rateLimit");
                }
                download(e) {
                    return this.request({
                        method: "GET",
                        path: e
                    }).then(this.parseFileData);
                }
                upload(e, t) {
                    return this.request({
                        method: "POST",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                parseFileData(e) {
                    return new Promise(((t, s) => {
                        if ("undefined" != typeof window) {
                            t({
                                body: e.body,
                                url: e.url,
                                blob: () => e.blob()
                            });
                        } else {
                            const s = e.headers.get("Content-Disposition"), r = s ? s.substring(s.indexOf("''") + 2) : "";
                            t({
                                body: e.body,
                                url: e.url,
                                filename: r
                            });
                        }
                    }));
                }
            }
        },
        "./src/entity.ts": (e, t, s) => {
            "use strict";
            let r, i;
            s.r(t), s.d(t, {
                File: () => r,
                OAuth2: () => i
            }), r || (r = {}), i || (i = {});
        },
        "./src/error.ts": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                BacklogApiError: () => BacklogApiError,
                BacklogAuthError: () => BacklogAuthError,
                BacklogError: () => BacklogError,
                UnexpectedError: () => UnexpectedError
            });
            class BacklogError extends Error {
                constructor(e, t, s) {
                    super(t.statusText), this._name = void 0, this._url = void 0, this._status = void 0, 
                    this._body = void 0, this._response = void 0, this._name = e, this._url = t.url, 
                    this._status = t.status, this._body = s, this._response = t;
                }
                get name() {
                    return this._name;
                }
                get url() {
                    return this._url;
                }
                get status() {
                    return this._status;
                }
                get body() {
                    return this._body;
                }
                get response() {
                    return this._response;
                }
            }
            class BacklogApiError extends BacklogError {
                constructor(e, t) {
                    super("BacklogApiError", e, t);
                }
            }
            class BacklogAuthError extends BacklogError {
                constructor(e, t) {
                    super("BacklogAuthError", e, t);
                }
            }
            class UnexpectedError extends BacklogError {
                constructor(e) {
                    super("UnexpectedError", e);
                }
            }
        },
        "./src/oauth2.ts": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => OAuth2
            });
            var r = s("./src/request.ts");
            class OAuth2 {
                constructor(e, t) {
                    this.credentials = e, this.timeout = t;
                }
                getAuthorizationURL(e) {
                    const t = {
                        client_id: this.credentials.clientId,
                        response_type: "code",
                        redirect_uri: e.redirectUri,
                        state: e.state
                    };
                    return `https://${e.host}/OAuth2AccessRequest.action?` + Object.keys(t).map((e => t[e] ? `${e}=${t[e]}` : "")).filter((e => e.length > 0)).join("&");
                }
                getAccessToken(e) {
                    return new r.default({
                        host: e.host,
                        timeout: this.timeout
                    }).post("oauth2/token", {
                        grant_type: "authorization_code",
                        code: e.code,
                        client_id: this.credentials.clientId,
                        client_secret: this.credentials.clientSecret,
                        redirect_uri: e.redirectUri
                    });
                }
                refreshAccessToken(e) {
                    return new r.default({
                        host: e.host,
                        timeout: this.timeout
                    }).post("oauth2/token", {
                        grant_type: "refresh_token",
                        client_id: this.credentials.clientId,
                        client_secret: this.credentials.clientSecret,
                        refresh_token: e.refreshToken
                    });
                }
            }
        },
        "./src/option.ts": (e, t, s) => {
            "use strict";
            let r, i, o, u, n, c, a, h, p, d, l;
            s.r(t), s.d(t, {
                ActivityType: () => r,
                Group: () => n,
                Issue: () => h,
                Notification: () => i,
                OAuth2: () => l,
                Project: () => a,
                PullRequest: () => p,
                Space: () => o,
                Team: () => c,
                User: () => u,
                Wiki: () => d
            }), function(e) {
                e[e.Undefined = -1] = "Undefined", e[e.IssueCreated = 1] = "IssueCreated", e[e.IssueUpdated = 2] = "IssueUpdated", 
                e[e.IssueCommented = 3] = "IssueCommented", e[e.IssueDeleted = 4] = "IssueDeleted", 
                e[e.WikiCreated = 5] = "WikiCreated", e[e.WikiUpdated = 6] = "WikiUpdated", e[e.WikiDeleted = 7] = "WikiDeleted", 
                e[e.FileAdded = 8] = "FileAdded", e[e.FileUpdated = 9] = "FileUpdated", e[e.FileDeleted = 10] = "FileDeleted", 
                e[e.SvnCommitted = 11] = "SvnCommitted", e[e.GitPushed = 12] = "GitPushed", e[e.GitRepositoryCreated = 13] = "GitRepositoryCreated", 
                e[e.IssueMultiUpdated = 14] = "IssueMultiUpdated", e[e.ProjectUserAdded = 15] = "ProjectUserAdded", 
                e[e.ProjectUserRemoved = 16] = "ProjectUserRemoved", e[e.NotifyAdded = 17] = "NotifyAdded", 
                e[e.PullRequestAdded = 18] = "PullRequestAdded", e[e.PullRequestUpdated = 19] = "PullRequestUpdated", 
                e[e.PullRequestCommented = 20] = "PullRequestCommented", e[e.PullRequestMerged = 21] = "PullRequestMerged";
            }(r || (r = {})), i || (i = {}), o || (o = {}), function(e) {
                let t;
                !function(e) {
                    e[e.Admin = 1] = "Admin", e[e.User = 2] = "User", e[e.Reporter = 3] = "Reporter", 
                    e[e.Viewer = 4] = "Viewer", e[e.GuestReporter = 5] = "GuestReporter", e[e.GuestViewer = 6] = "GuestViewer";
                }(t || (t = {})), e.RoleType = t;
            }(u || (u = {})), n || (n = {}), c || (c = {}), function(e) {
                let t;
                !function(e) {
                    e[e.Text = 1] = "Text", e[e.TextArea = 2] = "TextArea", e[e.Numeric = 3] = "Numeric", 
                    e[e.Date = 4] = "Date", e[e.SingleList = 5] = "SingleList", e[e.MultipleList = 6] = "MultipleList", 
                    e[e.CheckBox = 7] = "CheckBox", e[e.Radio = 8] = "Radio";
                }(t || (t = {})), e.FieldType = t;
            }(a || (a = {})), function(e) {
                let t;
                !function(e) {
                    e[e.All = 0] = "All", e[e.NotChild = 1] = "NotChild", e[e.Child = 2] = "Child", 
                    e[e.NotChildNotParent = 3] = "NotChildNotParent", e[e.Parent = 4] = "Parent";
                }(t || (t = {})), e.ParentChildType = t;
            }(h || (h = {})), p || (p = {}), d || (d = {}), l || (l = {});
        },
        "./src/request.ts": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => Request
            });
            var r = s("./src/error.ts");
            class Request {
                constructor(e) {
                    this.configure = e;
                }
                get(e, t) {
                    return this.request({
                        method: "GET",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                post(e, t) {
                    return this.request({
                        method: "POST",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                put(e, t) {
                    return this.request({
                        method: "PUT",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                patch(e, t) {
                    return this.request({
                        method: "PATCH",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                delete(e, t) {
                    return this.request({
                        method: "DELETE",
                        path: e,
                        params: t
                    }).then(this.parseJSON);
                }
                request(e) {
                    const {method: t, path: s, params: r = {}} = e, {apiKey: i, accessToken: o, timeout: u} = this.configure, n = i ? {
                        apiKey: i
                    } : {}, c = {
                        method: t,
                        headers: {}
                    };
                    u && (c.timeout = u), !i && o && (c.headers.Authorization = "Bearer " + o), "undefined" != typeof window && (c.mode = "cors"), 
                    "GET" !== t ? r instanceof FormData ? c.body = r : (c.headers["Content-type"] = "application/x-www-form-urlencoded", 
                    c.body = this.toQueryString(r)) : Object.keys(r).forEach((e => n[e] = r[e]));
                    const a = this.toQueryString(n), h = `${this.restBaseURL}/${s}` + (a.length > 0 ? `?${a}` : "");
                    return new Promise(((e, t) => {
                        try {
                            e(UrlFetchApp.fetch(h, c));
                        } catch (e) {
                            t(e);
                        }
                    })).then(this.checkStatus);
                }
                checkStatus(e) {
                    return new Promise(((t, s) => {
                        let i = e.getResponseCode();
                        if (200 <= i && i < 300) {
                            t(e);
                        } else {
                            try {
                                let t = e.getContentText(), o = JSON.parse(t);
                                s(401 === i ? new r.BacklogAuthError(e, o) : new r.BacklogApiError(e, o));
                            } catch (t) {
                                s(new r.UnexpectedError(e));
                            }
                        }
                    }));
                }
                parseJSON(e) {
                    return new Promise(((t, s) => {
                        try {
                            let s = e.getContentText();
                            t(JSON.parse(s));
                        } catch (e) {
                            s(e);
                        }
                    }));
                }
                toQueryString(e) {
                    return Object.keys(e).reduce(((t, s) => {
                        const r = e[s];
                        return r ? (Array.isArray(r) ? r.forEach((e => t.push(`${s}[]=${encodeURIComponent(e)}`))) : t.push(`${s}=${encodeURIComponent(r)}`), 
                        t) : t;
                    }), []).join("&");
                }
                get webAppBaseURL() {
                    return `https://${this.configure.host}`;
                }
                get restBaseURL() {
                    return `${this.webAppBaseURL}/api/v2`;
                }
            }
        }
    }, t = {};
    function __webpack_require__(s) {
        var r = t[s];
        if (void 0 !== r) {
            return r.exports;
        }
        var i = t[s] = {
            exports: {}
        };
        return e[s](i, i.exports, __webpack_require__), i.exports;
    }
    __webpack_require__.d = (e, t) => {
        for (var s in t) {
            __webpack_require__.o(t, s) && !__webpack_require__.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            });
        }
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), 
    __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var s = {};
    (() => {
        "use strict";
        __webpack_require__.r(s), __webpack_require__.d(s, {
            Backlog: () => e.default,
            Entity: () => i,
            Error: () => o,
            OAuth2: () => t.default,
            Option: () => r
        });
        var e = __webpack_require__("./src/backlog.ts"), t = __webpack_require__("./src/oauth2.ts"), r = __webpack_require__("./src/option.ts"), i = __webpack_require__("./src/entity.ts"), o = __webpack_require__("./src/error.ts");
    })(), nulab = s;
})();