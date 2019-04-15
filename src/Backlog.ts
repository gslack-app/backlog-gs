import * as Option from './Option';
import * as Entity from './Entity';
import Request from './Request';
import { PQ } from './PQ';

export class Backlog {
    private request: Request;

    constructor(configure: {
        host: string, apiKey?: string, accessToken?: string, timeout?: number
    }) {
        this.request = new Request(configure);
    }

    private get<T>(path: string, params?: any): PQ<T> {
        return this.request.get<T>(path, params);
    }

    private post<T>(path: string, params?: any): PQ<T> {
        return this.request.post<T>(path, params);
    }

    private put<T>(path: string, params: any): PQ<T> {
        return this.request.put<T>(path, params);
    }

    private patch<T>(path: string, params: any): PQ<T> {
        return this.request.patch<T>(path, params);
    }

    private delete<T>(path: string, params?: any): PQ<T> {
        return this.request.delete<T>(path, params);
    }

    public getSpace(): PQ<any> {
        return this.get('space');
    }

    public getSpaceActivities(
        params: Option.Space.GetActivitiesParams
    ): PQ<any> {
        return this.get('space/activities', params);
    }

    public getSpaceNotification(): PQ<any> {
        return this.get('space/notification');
    }

    public putSpaceNotification(
        params: Option.Space.PutSpaceNotificationParams
    ): PQ<any> {
        return this.put('space/notification', params);
    }

    public getSpaceDiskUsage(): PQ<any> {
        return this.get('space/diskUsage');
    }

    public getSpaceIcon(): PQ<Entity.File.FileData> {
        return this.download('space/image');
    }

    public postSpaceAttachment(form: FormData) {
        return this.upload("space/attachment", form);
    }

    public getUsers(): PQ<any> {
        return this.get(`users`);
    }

    public getUser(userId: number): PQ<any> {
        return this.get(`users/${userId}`);
    }

    public postUser(params: Option.User.PostUserParams): PQ<any> {
        return this.post(`users`, params);
    }

    public patchUser(
        userId: number, params: Option.User.PatchUserParams
    ): PQ<any> {
        return this.patch(`users/${userId}`, params);
    }

    public deleteUser(userId: number): PQ<any> {
        return this.delete(`users/${userId}`);
    }

    public getMyself(): PQ<any> {
        return this.get('users/myself');
    }

    public getUserActivities(
        userId: number, params: Option.User.GetUserActivitiesParams
    ): PQ<any> {
        return this.get(`users/${userId}/activities`, params);
    }

    public getUserStars(
        userId: number, params: Option.User.GetUserStarsParams
    ): PQ<any> {
        return this.get(`users/${userId}/stars`, params);
    }

    public getUserStarsCount(
        userId: number, params: Option.User.GetUserStarsCountParams
    ): PQ<any> {
        return this.get(`users/${userId}/count`, params);
    }

    public getRecentlyViewedIssues(
        params: Option.User.GetRecentlyViewedParams
    ): PQ<any> {
        return this.get('users/myself/recentlyViewedIssues', params);
    }

    public getRecentlyViewedProjects(
        params: Option.User.GetRecentlyViewedParams
    ): PQ<any> {
        return this.get('users/myself/recentlyViewedProjects', params);
    }

    public getRecentlyViewedWikis(
        params: Option.User.GetRecentlyViewedParams
    ): PQ<any> {
        return this.get('users/myself/recentlyViewedWikis', params);
    }

    public getUserIcon(userId: number): PQ<Entity.File.FileData> {
        return this.download(`users/${userId}/icon`);
    }

    public getGroups(params: Option.Group.GetGroupsParams): PQ<any> {
        return this.get('groups', params);
    }

    public postGroups(params: Option.Group.PostGroupsParams): PQ<any> {
        return this.post('groups', params);
    }

    public getGroup(groupId: number): PQ<any> {
        return this.get(`groups/${groupId}`);
    }

    public patchGroup(
        groupId: number, params: Option.Group.PatchGroupParams
    ): PQ<any> {
        return this.patch('groups', params);
    }

    public deleteGroup(groupId: number): PQ<any> {
        return this.delete(`groups/${groupId}`);
    }

    public getStatuses(): PQ<any> {
        return this.get('statuses');
    }

    public getResolutions(): PQ<any> {
        return this.get('resolutions');
    }

    public getPriorities(): PQ<any> {
        return this.get('priorities');
    }

    public postProject(params: Option.Project.PostProjectParams): PQ<any> {
        return this.post('projects', params);
    }

    public getProjects(params?: Option.Project.GetProjectsParams): PQ<any> {
        return this.get('projects', params);
    }

    public getProject(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}`);
    }

    public patchProject(
        projectIdOrKey: string, params: Option.Project.PatchProjectParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}`, params);
    }

    public deleteProject(projectIdOrKey: string): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}`);
    }

    public getProjectActivities(
        projectIdOrKey: string, params: Option.Space.GetActivitiesParams
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/activities`, params);
    }

    public getProjectUsers(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/users`);
    }

    public deleteProjectUsers(
        projectIdOrKey: string, params: Option.Project.DeleteProjectUsersParams
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/users`, params);
    }

    public postProjectAdministrators(
        projectIdOrKey: string, params: Option.Project.PostProjectAdministrators
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/administrators`, params);
    }

    public getProjectAdministrators(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/administrators`);
    }

    public deleteProjectAdministrators(
        projectIdOrKey: string, params: Option.Project.DeleteProjectAdministrators
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/administrators`, params);
    }

    public getIssueTypes(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/issueTypes`);
    }

    public postIssueType(
        projectIdOrKey: string, params: Option.Project.PostIssueTypeParams
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/issueTypes`, params);
    }

    public patchIssueType(
        projectIdOrKey: string, id: number, params: Option.Project.PatchIssueTypeParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
    }

    public deleteIssueType(
        projectIdOrKey: string, id: number, params: Option.Project.DeleteIssueTypeParams
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
    }

    public getCategories(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/categories`);
    }

    public postCategories(
        projectIdOrKey: string, params: Option.Project.PostCategoriesParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/categories`, params);
    }

    public patchCategories(
        projectIdOrKey: string, id: number, params: Option.Project.PatchCategoriesParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
    }

    public deleteCategories(projectIdOrKey: string, id: number): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/categories/${id}`);
    }

    public getVersions(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/versions`);
    }

    public postVersions(
        projectIdOrKey: string, params: Option.Project.PostVersionsParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/versions`, params);
    }

    public patchVersions(
        projectIdOrKey: string, id: number, params: Option.Project.PatchVersionsParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
    }

    public deleteVersions(projectIdOrKey: string, id: number): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/versions/${id}`);
    }

    public getCustomFields(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/customFields`);
    }

    public postCustomField(
        projectIdOrKey: string,
        params: Option.Project.PostCustomFieldParams
            | Option.Project.PostCustomFieldWithNumericParams
            | Option.Project.PostCustomFieldWithDateParams
            | Option.Project.PostCustomFieldWithListParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/customFields`, params);
    }

    public patchCustomField(
        projectIdOrKey: string,
        id: number,
        params: Option.Project.PatchCustomFieldParams
            | Option.Project.PatchCustomFieldWithNumericParams
            | Option.Project.PatchCustomFieldWithDateParams
            | Option.Project.PatchCustomFieldWithListParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
    }

    public deleteCustomField(projectIdOrKey: string, id: number): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/customFields/${id}`);
    }

    public postCustomFieldItem(
        projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
    }

    public patchCustomFieldItem(
        projectIdOrKey: string, id: number, itemId: number, params: Option.Project.PatchCustomFieldItemParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
    }

    public deleteCustomFieldItem(
        projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/customFields/${id}/items`);
    }

    public getSharedFiles(
        projectIdOrKey: string, path: string, params: Option.Project.GetSharedFilesParams
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/files/metadata/${path}`);
    }

    public getProjectsDiskUsage(
        projectIdOrKey: string
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/diskUsage`);
    }

    public getWebhooks(
        projectIdOrKey: string
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/webhooks`);
    }

    public postWebhook(
        projectIdOrKey: string, params: Option.Project.PostWebhookParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/webhooks`, params);
    }

    public getWebhook(
        projectIdOrKey: string, webhookId: string
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
    }

    public patchWebhook(
        projectIdOrKey: string, webhookId: string, params: Option.Project.PatchWebhookParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
    }

    public deleteWebhook(
        projectIdOrKey: string, webhookId: string
    ): PQ<any> {
        return this.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
    }

    public postIssue(params: Option.Issue.PostIssueParams): PQ<any> {
        return this.post('issues', params);
    }

    public patchIssue(
        issueIdOrKey: string, params: Option.Issue.PatchIssueParams
    ): PQ<any> {
        return this.patch(`issues/${issueIdOrKey}`, params);
    }

    public getIssues(params?: Option.Issue.GetIssuesParams): PQ<any> {
        return this.get('issues', params);
    }

    public getIssue(issueIdOrKey: string): PQ<any> {
        return this.get(`issues/${issueIdOrKey}`);
    }

    public getIssuesCount(params?: Option.Issue.GetIssuesParams): PQ<any> {
        return this.get('issues/count', params);
    }

    public deleteIssuesCount(issueIdOrKey: string): PQ<any> {
        return this.delete(`issues/${issueIdOrKey}`);
    }

    public getIssueComments(
        issueIdOrKey: string, params: Option.Issue.GetIssueCommentsParams
    ): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/comments`, params);
    }

    public postIssueComments(
        issueIdOrKey: string, params: Option.Issue.PostIssueCommentsParams
    ): PQ<any> {
        return this.post(`issues/${issueIdOrKey}/comments`, params);
    }

    public getIssueCommentsCount(issueIdOrKey: string): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/comments/count`);
    }

    public getIssueComment(issueIdOrKey: string, commentId: number): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/comments/${commentId}`);
    }

    public patchIssueComment(
        issueIdOrKey: string, commentId: number, params: Option.Issue.PatchIssueCommentParams
    ): PQ<any> {
        return this.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
    }

    public getIssueCommentNotifications(
        issueIdOrKey: string, commentId: number
    ): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
    }

    public postIssueCommentNotifications(
        issueIdOrKey: string, commentId: number, prams: Option.Issue.IssueCommentNotifications
    ): PQ<any> {
        return this.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
    }

    public getIssueAttachments(issueIdOrKey: string): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/attachments`);
    }

    public deleteIssueAttachment(issueIdOrKey: string, attachmentId: string): PQ<any> {
        return this.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
    }

    public getIssueSharedFiles(issueIdOrKey: string): PQ<any> {
        return this.get(`issues/${issueIdOrKey}/sharedFiles`);
    }

    public linkIssueSharedFiles(
        issueIdOrKey: string, params: Option.Issue.LinkIssueSharedFilesParams
    ): PQ<any> {
        return this.post(`issues/${issueIdOrKey}/sharedFiles`, params);
    }

    public unlinkIssueSharedFile(issueIdOrKey: string, id: number): PQ<any> {
        return this.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
    }

    public getWikis(projectIdOrKey: number): PQ<any> {
        return this.get(`wikis`, { projectIdOrKey });
    }

    public getWikisCount(projectIdOrKey: number): PQ<any> {
        return this.get(`wikis/count`, { projectIdOrKey });
    }

    public getWikisTags(projectIdOrKey: number): PQ<any> {
        return this.get(`wikis/tags`, { projectIdOrKey });
    }

    public postWiki(params: Option.Wiki.PostWikiParams): PQ<any> {
        return this.post(`wikis`, params);
    }

    public getWiki(wikiId: number): PQ<any> {
        return this.get(`wikis/${wikiId}`);
    }

    public patchWiki(
        wikiId: number, params: Option.Wiki.PatchWikiParams
    ): PQ<any> {
        return this.patch(`wikis/${wikiId}`, params);
    }

    public deleteWiki(wikiId: number, mailNotify: boolean): PQ<any> {
        return this.delete(`wikis/${wikiId}`, { mailNotify });
    }

    public getWikisAttachments(wikiId: number): PQ<any> {
        return this.get(`wikis/${wikiId}/attachments`);
    }

    public postWikisAttachments(wikiId: number, attachmentId: number[]): PQ<any> {
        return this.post(`wikis/${wikiId}/attachments`, { attachmentId });
    }

    public deleteWikisAttachments(wikiId: number, attachmentId: number): PQ<any> {
        return this.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
    }

    public getWikisSharedFiles(wikiId: number): PQ<any> {
        return this.get(`wikis/${wikiId}/sharedFiles`);
    }

    public linkWikisSharedFiles(wikiId: number, fileId: number[]): PQ<any> {
        return this.post(`wikis/${wikiId}/sharedFiles`, { fileId });
    }

    public unlinkWikisSharedFiles(wikiId: number, id: number): PQ<any> {
        return this.delete(`wikis/${wikiId}/sharedFiles/${id}`);
    }

    public getWikisHistory(
        wikiId: number, params: Option.Wiki.GetWikisHistoryParams
    ): PQ<any> {
        return this.get(`wikis/${wikiId}/history`, params);
    }

    public getWikisStars(wikiId: number): PQ<any> {
        return this.get(`wikis/${wikiId}/stars`);
    }

    public postStar(params: Option.Project.PostStarParams): PQ<any> {
        return this.post('stars', params);
    }

    public getNotifications(
        params: Option.Notification.GetNotificationsParams
    ): PQ<any> {
        return this.get('notifications', params);
    }

    public getNotificationsCount(
        params: Option.Notification.GetNotificationsCountParams
    ): PQ<any> {
        return this.get('notifications/count', params);
    }

    public resetNotificationsMarkAsRead(): PQ<any> {
        return this.post('notifications/markAsRead');
    }

    public markAsReadNotification(id: number): PQ<any> {
        return this.post(`notifications/${id}/markAsRead`);
    }

    public getGitRepositories(projectIdOrKey: string): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories`);
    }

    public getGitRepository(
        projectIdOrKey: string, repoIdOrName: string
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
    }

    public getPullRequests(
        projectIdOrKey: string,
        repoIdOrName: string,
        params: Option.PullRequest.GetPullRequestsParams
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
    }

    public getPullRequestsCount(
        projectIdOrKey: string,
        repoIdOrName: string,
        params: Option.PullRequest.GetPullRequestsParams
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
    }

    public postPullRequest(
        projectIdOrKey: string,
        repoIdOrName: string,
        params: Option.PullRequest.PostPullRequestParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
    }

    public getPullRequest(
        projectIdOrKey: string, repoIdOrName: string, number: number
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
    }

    public patchPullRequest(
        projectIdOrKey: string,
        repoIdOrName: string,
        number: number,
        params: Option.PullRequest.PatchPullRequestParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
    }

    public getPullRequestComments(
        projectIdOrKey: string,
        repoIdOrName: string,
        number: number,
        params: Option.PullRequest.GetPullRequestCommentsParams
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
    }

    public postPullRequestComments(
        projectIdOrKey: string,
        repoIdOrName: string,
        number: number,
        params: Option.PullRequest.PostPullRequestCommentsParams
    ): PQ<any> {
        return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
    }

    public getPullRequestCommentsCount(
        projectIdOrKey: string, repoIdOrName: string, number: number
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
    }

    public patchPullRequestComments(
        projectIdOrKey: string,
        repoIdOrName: string,
        number: number,
        commentId: number,
        params: Option.PullRequest.PatchPullRequestCommentsParams
    ): PQ<any> {
        return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/${commentId}`, params);
    }

    public getPullRequestAttachments(
        projectIdOrKey: string, repoIdOrName: string, number: number
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
    }

    public deletePullRequestAttachment(
        projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number
    ): PQ<any> {
        return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
    }

    public getProjectIcon(projectIdOrKey: string): PQ<Entity.File.FileData> {
        return this.download(`projects/${projectIdOrKey}/image`);
    }

    public getSharedFile(projectIdOrKey: string, sharedFileId: number): PQ<Entity.File.FileData> {
        return this.download(`projects/${projectIdOrKey}/files/${sharedFileId}`);
    }

    public getIssueAttachment(issueIdOrKey: string, attachmentId: number): PQ<Entity.File.FileData> {
        return this.download(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
    }

    public getWikiAttachment(wikiId: number, attachmentId: number): PQ<Entity.File.FileData> {
        return this.download(`wikis/${wikiId}/attachments/${attachmentId}`);
    }

    public getPullRequestAttachment(
        projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number
    ): PQ<Entity.File.FileData> {
        return new PQ<Entity.File.FileData>((resolve, reject) => {
            reject(new Error('Not Implemented'));
        });
        /* return this.download(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`); */
    }

    private download(path: string): PQ<Entity.File.FileData> {
        return new PQ<Entity.File.FileData>((resolve, reject) => {
            reject(new Error('Not Implemented'));
        });
        /* return this.request({ method: 'GET', path }).then(this.parseFileData); */
    }

    private upload(path: string, params: any): PQ<GoogleAppsScript.URL_Fetch.HTTPResponse> {
        return new PQ<GoogleAppsScript.URL_Fetch.HTTPResponse>((resolve, reject) => {
            reject(new Error('Not Implemented'));
        });
        /* return this.request({ method: 'POST', path, params }).then(this.parseJSON); */
    }

    private parseFileData(response: GoogleAppsScript.URL_Fetch.HTTPResponse): PQ<Entity.File.FileData> {
        return new PQ<Entity.File.FileData>((resolve, reject) => {
            reject(new Error('Not Implemented'));
        });
        /* return new Promise((resolve, reject) => {
            if (typeof window !== 'undefined') {
                resolve({
                    body: (<any>response).body,
                    url: response.url,
                    blob: () => response.blob(),
                });
            } else {
                const disposition = response.headers.get("Content-Disposition");
                const filename = disposition
                    ? disposition.substring(disposition.indexOf("''") + 2) : "";
                resolve({
                    body: (<any>response).body,
                    url: response.url,
                    filename: filename
                });
            }
        }); */
    }
}
