from rest_framework.permissions import BasePermission, SAFE_METHODS

class AccountListPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return request.user.is_staff

class AccountDetailPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.id == obj.id

class QuoteSetPermission(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_staff:
            return True
        if request.method in SAFE_METHODS:
            return True