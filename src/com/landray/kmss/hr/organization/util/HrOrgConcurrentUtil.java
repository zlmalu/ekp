package com.landray.kmss.hr.organization.util;

import org.hibernate.FlushMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate5.SessionFactoryUtils;
import org.springframework.orm.hibernate5.SessionHolder;
import org.springframework.transaction.support.TransactionSynchronizationManager;

public class HrOrgConcurrentUtil {

	public static boolean bindHibernateSessionToThread(SessionFactory sessionFactory) {
		if (TransactionSynchronizationManager.hasResource(sessionFactory)) {
			return true;
		} else {
			Session session = sessionFactory.openSession();
			session.setFlushMode(FlushMode.MANUAL);
			SessionHolder sessionHolder = new SessionHolder(session);
			TransactionSynchronizationManager.bindResource(sessionFactory, sessionHolder);
		}
		return false;
	}

	public static void closeHibernateSessionFromThread(boolean participate, Object sessionFactory) {

		if (!participate) {
			SessionHolder sessionHolder = (SessionHolder) TransactionSynchronizationManager
					.unbindResource(sessionFactory);
			SessionFactoryUtils.closeSession(sessionHolder.getSession());
		}
	}

}
