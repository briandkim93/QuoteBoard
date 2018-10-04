from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminUserOrCreateOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return request.user.is_staff

class IsCurrentUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        try:
            return request.user.id == obj.account.id
        except AttributeError:
            return request.user.id == obj.id

class IsAdminUserOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_staff:
            return True
        if request.method in SAFE_METHODS:
            return True